const scoreScheme = (scheme, answers) => {
  let score = 0;

  if (answers.age >= scheme.ageRange[0] && answers.age <= scheme.ageRange[1]) {
    score += 3;
  }

  if (answers.income <= scheme.maxIncome) {
    score += 3;
  }

  if (scheme.occupations.includes(answers.occupation)) {
    score += 2;
  }

  if (scheme.states.includes("All States") || scheme.states.includes(answers.state)) {
    score += 2;
  }

  if (!answers.category || scheme.categories.includes(answers.category)) {
    score += 1;
  }

  return score;
};

export const getMatchingSchemes = (schemeList, answers) => {
  return schemeList
    .filter((scheme) => {
      const ageMatch =
        answers.age >= scheme.ageRange[0] && answers.age <= scheme.ageRange[1];
      const incomeMatch = answers.income <= scheme.maxIncome;
      const occupationMatch = scheme.occupations.includes(answers.occupation);
      const stateMatch =
        scheme.states.includes("All States") || scheme.states.includes(answers.state);
      const categoryMatch =
        !answers.category || scheme.categories.includes(answers.category);

      return ageMatch && incomeMatch && occupationMatch && stateMatch && categoryMatch;
    })
    .map((scheme) => ({
      ...scheme,
      score: scoreScheme(scheme, answers)
    }))
    .sort((first, second) => second.score - first.score)
    .slice(0, 3);
};
