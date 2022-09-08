import{_ as a,c as l,o as e,a as i}from"./app.f824e806.js";const t="/assets/tableau-daily.950b7e21.png",f=JSON.parse('{"title":"Tableau","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5DE5\u5177\u5BF9\u6BD4","slug":"\u5DE5\u5177\u5BF9\u6BD4"},{"level":2,"title":"Tableau\u53EF\u89C6\u5316\u539F\u7406","slug":"tableau\u53EF\u89C6\u5316\u539F\u7406"},{"level":2,"title":"\u6570\u636E\u53EF\u89C6\u5316\u539F\u5219","slug":"\u6570\u636E\u53EF\u89C6\u5316\u539F\u5219"},{"level":2,"title":"\u4EEA\u8868\u76D8\u6210\u679C\u5C55\u793A","slug":"\u4EEA\u8868\u76D8\u6210\u679C\u5C55\u793A"}],"relativePath":"course/data-analysis/003-tableau.md","lastUpdated":1662604600000}'),r={name:"course/data-analysis/003-tableau.md"},s=i('<h1 id="tableau" tabindex="-1">Tableau <a class="header-anchor" href="#tableau" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#\u5DE5\u5177\u5BF9\u6BD4">\u5DE5\u5177\u5BF9\u6BD4</a></li><li><a href="#tableau\u53EF\u89C6\u5316\u539F\u7406">Tableau\u53EF\u89C6\u5316\u539F\u7406</a></li><li><a href="#\u6570\u636E\u53EF\u89C6\u5316\u539F\u5219">\u6570\u636E\u53EF\u89C6\u5316\u539F\u5219</a></li><li><a href="#\u4EEA\u8868\u76D8\u6210\u679C\u5C55\u793A">\u4EEA\u8868\u76D8\u6210\u679C\u5C55\u793A</a></li></ul></nav><h2 id="\u5DE5\u5177\u5BF9\u6BD4" tabindex="-1">\u5DE5\u5177\u5BF9\u6BD4 <a class="header-anchor" href="#\u5DE5\u5177\u5BF9\u6BD4" aria-hidden="true">#</a></h2><p><strong>Excel</strong></p><ul><li>\u5BB9\u6613\u4E0A\u624B</li><li>\u529F\u80FD\u5F3A\u5927</li><li>\u8FC7\u7A0B\u96BE\u4EE5\u590D\u7528\u548C\u81EA\u52A8\u5316</li><li>\u65E0\u6CD5\u5904\u7406\u5927\u91CF\u7EA7\u6570\u636E: 10w\u5361, 30w\u5F7B\u5E95\u8DD1\u4E0D\u4E86</li></ul><p><strong>SQL</strong></p><ul><li>\u529F\u80FD\u5F3A\u5927, \u4F46\u53EA\u64C5\u957F\u4E8E\u53D6\u6570\u548C\u4E1A\u52A1\u67E5\u8BE2</li><li>\u53EF\u4EE5\u91CD\u590D\u6267\u884C\u548C\u81EA\u52A8\u5316</li></ul><p><strong>Python/R</strong></p><ul><li>\u5B66\u4E60\u96BE\u5EA6\u9AD8</li><li>\u529F\u80FD\u5F3A\u5927, \u6570\u636E\u5904\u7406, \u63CF\u8FF0\u6027\u5206\u6790\u548C\u7B97\u6CD5\u5EFA\u6A21\u90FD\u80FD\u505A</li><li>\u53EF\u4EE5\u91CD\u590D\u6267\u884C\u548C\u81EA\u52A8\u5316</li></ul><p><strong>Tableau</strong></p><ul><li>\u5BB9\u6613\u4E0A\u624B</li><li>\u7F8E\u89C2\u76F4\u63A5</li><li>\u529F\u80FD\u5F3A\u5927, \u5C24\u5176\u5728\u6570\u636E\u63A2\u7D22\u548C\u53EF\u89C6\u5316\u7EDD\u5BF9\u662F\u7B2C\u4E00\u540D</li><li>\u53EF\u4EE5\u91CD\u590D\u6267\u884C</li><li>\u5386\u53F2\u60A0\u4E45 <ul><li>20\u4E16\u7EAA90\u5E74\u4EE3\u4ECE\u7F8E\u519B\u7684\u6218\u5730\u53EF\u89C6\u5316\u9879\u76EE\u6F14\u53D8\u800C\u6765</li><li>2003\u5E74\u6B63\u5F0F\u72EC\u7ACB\u6210\u4E3A\u5546\u4E1A\u8F6F\u4EF6</li><li>\u4E00\u76F4\u4E0D\u65AD\u8FDB\u5316\u8FED\u4EE3\u4E86\u8FD120\u5E74</li></ul></li></ul><h2 id="tableau\u53EF\u89C6\u5316\u539F\u7406" tabindex="-1">Tableau\u53EF\u89C6\u5316\u539F\u7406 <a class="header-anchor" href="#tableau\u53EF\u89C6\u5316\u539F\u7406" aria-hidden="true">#</a></h2><p>\u5EA6\u91CF\u9ED8\u8BA4\u805A\u5408</p><p>\u5EA6\u91CF\u503C\u4F1A\u5F62\u6210\u56FE\u5F62\u6807\u8BB0, \u56FE\u5F62\u6807\u8BB0\u53EF\u4EE5\u5207\u6362</p><p>\u7EF4\u5EA6\u4F1A\u5BF9\u5EA6\u91CF\u503C\u8FDB\u884C\u533A\u5206, \u589E\u52A0\u5EA6\u91CF\u503C\u7684\u4FE1\u606F\u5BC6\u5EA6 (\u5355\u4E2A\u56FE\u8868\u4F20\u8FBE\u4FE1\u606F\u7684\u591A\u5C11)</p><p>\u56FE\u8868\u5206\u4E3A\u6709\u8F74\u56FE\u8868\u548C\u65E0\u8F74\u56FE\u8868 (\u6781\u5750\u6807\u56FE\u8868)</p><p>\u79BB\u6563\u5F62\u6210\u6807\u7B7E, \u8FDE\u7EED\u5F62\u6210\u6570\u8F74</p><h2 id="\u6570\u636E\u53EF\u89C6\u5316\u539F\u5219" tabindex="-1">\u6570\u636E\u53EF\u89C6\u5316\u539F\u5219 <a class="header-anchor" href="#\u6570\u636E\u53EF\u89C6\u5316\u539F\u5219" aria-hidden="true">#</a></h2><p>\u533A\u5206\u7528\u6237</p><p>\u4E3B\u6B21\u5206\u660E, \u8BE6\u7565\u5F97\u5F53</p><p>\u771F\u5B9E\u51C6\u786E</p><p>\u7B26\u5408\u5927\u4F17\u8BA4\u77E5\u548C\u5BA1\u7F8E\u4E60\u60EF</p><p>\u9002\u5EA6\u539F\u5219</p><p>\u4E94\u79D2\u539F\u5219</p><p>\u5C11\u5373\u662F\u591A</p><p>\u53EF\u89C6\u5316\u6848\u4F8B</p><h2 id="\u4EEA\u8868\u76D8\u6210\u679C\u5C55\u793A" tabindex="-1">\u4EEA\u8868\u76D8\u6210\u679C\u5C55\u793A <a class="header-anchor" href="#\u4EEA\u8868\u76D8\u6210\u679C\u5C55\u793A" aria-hidden="true">#</a></h2><p><img src="'+t+'" alt="tableau-daily"></p>',28),n=[s];function p(u,d,o,h,c,_){return e(),l("div",null,n)}const g=a(r,[["render",p]]);export{f as __pageData,g as default};
