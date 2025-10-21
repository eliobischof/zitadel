module.exports = {
  branches: [
    { name: "main" },
    { name: "next-rc", prerelease: "rc" },
    { name: "release-archives", prerelease: true },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        draftRelease: true,
        successComment: false,
        assets: [
          {
            path: ".artifacts/pack/zitadel-linux-amd64.tar.gz",
            label: "zitadel-linux-amd64.tar.gz",
          },
          {
            path: ".artifacts/pack/zitadel-linux-arm64.tar.gz",
            label: "zitadel-linux-arm64.tar.gz",
          },
          {
            path: ".artifacts/pack/zitadel-windows-amd64.tar.gz",
            label: "zitadel-windows-amd64.tar.gz",
          },
          {
            path: ".artifacts/pack/zitadel-windows-arm64.tar.gz",
            label: "zitadel-windows-arm64.tar.gz",
          },
          {
            path: ".artifacts/pack/zitadel-darwin-amd64.tar.gz",
            label: "zitadel-darwin-amd64.tar.gz",
          },
          {
            path: ".artifacts/pack/zitadel-darwin-arm64.tar.gz",
            label: "zitadel-darwin-arm64.tar.gz",
          },
          {
            path: ".artifacts/checksums.txt",
            label: "checksums.txt",
          }
        ],
      },
    ],
  ],
};
