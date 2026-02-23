const MAX_SCORE = 1000000;
function validateScore(body) {
  const errors = [];
  if (!body.game) errors.push("game is required");
  if (typeof body.value !== "number") errors.push("value must be a number");
