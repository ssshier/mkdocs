import { version } from '../../package.json'


export default {
  base: "/mkdocs/",
  title: "mkdocs",
  description: "Tech & Algorithm",
  lastUpdated: true,
  cleanUrls: "without-subfolders",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/tech/": sidebarTech(),
      "/algorithm/": sidebarAlgorithm(),
      "/knowledge/": sidebarKnowledge(),
      "/others/": sidebarOthers(),
    },

    editLink: {
      pattern: 'https://gitee.com/ssshier/mkdocs/edit/main/docs/:path',
      text: 'Edit this page on Gitee'
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#c71d23" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        },
        link: "https://gitee.com/ssshier",
      },
      {
        icon: 'github',
        link: "https://github.com/ssshier",
      },
    ],

    footer: {
      message: "Released under the MulanPSL2 License.",
      copyright: "Copyright © 2022-present ssshier",
    }
  },
};

function nav() {
  return [
    {
      text: "Tech",
      link: "/tech/index",
      activeMatch: "/tech/",
    },
    {
      text: "Algorithm",
      link: "/algorithm/index",
      activeMatch: "/algorithm/",
    },
    {
      text: "Knowledge",
      link: "/knowledge/index",
      activeMatch: "/knowledge/",
    },
    {
      text: "Others",
      link: "/others/index",
      activeMatch: "/others/",
    },
    {
      text: version,
      items: [
        {
          text: "Gitee link",
          link: "https://gitee.com/ssshier/mkdocs",
        },
        {
          text: "Github link",
          link: "https://github.com/ssshier/mkdocs",
        }
      ],
    },
  ];
}

function sidebarTech() {
  return [
    {
      text: "Tech",
      collapsible: true,
      items: [
        {
          text: "About",
          link: "/tech/index",
        },
      ],
    },
  ];
}

function sidebarAlgorithm() {
  return [
    {
      text: "Algorithm",
      collapsible: true,
      items: [
        {
          text: "About",
          link: "/algorithm/index",
        },
        {
          text: "Search",
          link: "/algorithm/search",
        }
      ],
    },
  ];
}

function sidebarKnowledge() {
  return [
    {
      text: "Knowledge",
      collapsible: true,
      items: [
        {
          text: "About",
          link: "/knowledge/index",
        },
        {
          text: "Python",
          link: "/knowledge/python",
        },
        {
          text: "Python Lib",
          link: "/knowledge/python-lib",
        },
        {
          text: "Python Web Framework",
          link: "/knowledge/python-web-framework",
        },
        {
          text: "Linux",
          link: "/knowledge/linux",
        },
        {
          text: "SQL",
          link: "/knowledge/sql",
        },
        {
          text: "NoSQL",
          link: "/knowledge/nosql",
        },
        {
          text: "Middleware",
          link: "/knowledge/middleware",
        },
        {
          text: "Docker",
          link: "/knowledge/docker",
        },
        {
          text: "Cloud Native",
          link: "/knowledge/cloud-native",
        },
        {
          text: "Big Data",
          link: "/knowledge/big-data",
        },
      ],
    },
  ];
}

function sidebarOthers() {
  return [
    {
      text: "Others",
      collapsible: true,
      items: [
        {
          text: "About",
          link: "/others/index",
        },
      ],
    },
  ];
}