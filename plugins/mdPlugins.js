module.exports = {
  name: "md-plugins",
  extendsMarkdown: (md) => {
    md.use(require("markdown-it-sup"));
    md.use(require("markdown-it-sub"));
    md.use(require("markdown-it-mark"));
    md.use(require("markdown-it-emoji"));
    md.use(require("markdown-it-ins"));
    md.use(require("markdown-it-footnote"));
    md.use(require("markdown-it-deflist"));
    md.use(require("markdown-it-abbr"));
    md.use(require("markdown-it-video"));
    md.use(require("markdown-it-imsize"));
    //md.linkify.set({ fuzzyEmail: false });
  },
};