interface MajorCredits {
    credits: number;
    brand: 'major';
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'minor';
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'major'
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'minor'
    };
  }
  
  // Example usage
  const major1: MajorCredits = { credits: 3, brand: 'major' };
  const major2: MajorCredits = { credits: 4, brand: 'major' };
  const minor1: MinorCredits = { credits: 2, brand: 'minor' };
  const minor2: MinorCredits = { credits: 1, brand: 'minor' };
  
  console.log(sumMajorCredits(major1, major2)); // { credits: 7, brand: 'major' }
  console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, brand: 'minor' }
  