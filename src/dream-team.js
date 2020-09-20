module.exports = function createDreamTeam(members) {
  let result = [];
  if (typeof members != "object" || members === null) return false;
  else {
    for (let i = 0; i <= members.length; i++) {
      if (typeof members[i] === "string") {
        result.push(members[i].trim().substring(0, 1).toUpperCase());
      }
    }
  }
  return result.sort().join("");
};
