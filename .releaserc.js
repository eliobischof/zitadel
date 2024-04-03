module.exports = {
  branches: [
    { name: "next" },
    { name: "next-rc", prerelease: "rc" },
    { name: "v1.3.x", range: "1.3.x", channel: "1.3.x" },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
//    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github", { "draftRelease": true }
    ],
  ],
};
