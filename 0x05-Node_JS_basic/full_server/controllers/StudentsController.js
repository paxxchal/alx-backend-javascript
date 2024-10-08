import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        let output = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        sortedFields.forEach((field) => {
          output += `Number of students in ${field}: ${students[field].length}. `;
          output += `List: ${students[field].join(', ')}\n`;
        });

        response.status(200).send(output.trim());
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((students) => {
        const studentsInMajor = students[major] || [];
        response.status(200).send(`List: ${studentsInMajor.join(', ')}`);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

export default StudentsController;
