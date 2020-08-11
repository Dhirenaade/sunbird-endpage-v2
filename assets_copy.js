var wrench = require("wrench"),
  util = require("util");

var source = "projects/demo/src/assets";
var target = "dist/endpage-v2/lib/assets/";

wrench.copyDirSyncRecursive(source, target, {
  forceDelete: true
});

console.log("Asset files successfully copied!");