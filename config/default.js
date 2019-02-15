// ======================================================
// Configuration / Default
// ======================================================

// Libraries
const path = require("path");

// Paths
const loadedProjectName = "";
const pathToProjects = path.resolve(__dirname, "../projects/");

// Export configuration
module.exports = {
  loadedProject: {
    name: loadedProjectName,
    getPath() {
      return path.resolve(pathToProjects, `${this.name}/`);
    },
    getAssetsPath() {
      return path.resolve(this.getPath(), "assets/");
    }
  }
};
