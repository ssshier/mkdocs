import{_ as s,c as l,o as a,a as n}from"./app.f568c437.js";const h=JSON.parse('{"title":"NoSQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"MongoDB","slug":"mongodb"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9"},{"level":3,"title":"BSON\u6587\u6863","slug":"bson\u6587\u6863"},{"level":3,"title":"Objecld","slug":"objecld"},{"level":3,"title":"\u526F\u672C\u96C6","slug":"\u526F\u672C\u96C6"},{"level":3,"title":"Profiler","slug":"profiler"},{"level":2,"title":"Redis","slug":"redis"},{"level":3,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B"},{"level":3,"title":"\u5185\u5B58\u6DD8\u6C70","slug":"\u5185\u5B58\u6DD8\u6C70"},{"level":3,"title":"\u6301\u4E45\u5316","slug":"\u6301\u4E45\u5316"},{"level":3,"title":"\u4E8B\u52A1","slug":"\u4E8B\u52A1"},{"level":3,"title":"\u7F13\u5B58\u7A7F\u900F \u7F13\u5B58\u96EA\u5D29 \u7F13\u5B58\u51FB\u7A7F","slug":"\u7F13\u5B58\u7A7F\u900F-\u7F13\u5B58\u96EA\u5D29-\u7F13\u5B58\u51FB\u7A7F"}],"relativePath":"knowledge/nosql.md","lastUpdated":1663921683000}'),e={name:"knowledge/nosql.md"},o=n(`<h1 id="nosql" tabindex="-1">NoSQL <a class="header-anchor" href="#nosql" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#mongodb">MongoDB</a><ul><li><a href="#\u7279\u70B9">\u7279\u70B9</a></li><li><a href="#bson\u6587\u6863">BSON\u6587\u6863</a></li><li><a href="#objecld">Objecld</a></li><li><a href="#\u526F\u672C\u96C6">\u526F\u672C\u96C6</a></li><li><a href="#profiler">Profiler</a></li></ul></li><li><a href="#redis">Redis</a><ul><li><a href="#\u6570\u636E\u7C7B\u578B">\u6570\u636E\u7C7B\u578B</a></li><li><a href="#\u5185\u5B58\u6DD8\u6C70">\u5185\u5B58\u6DD8\u6C70</a></li><li><a href="#\u6301\u4E45\u5316">\u6301\u4E45\u5316</a></li><li><a href="#\u4E8B\u52A1">\u4E8B\u52A1</a></li><li><a href="#\u7F13\u5B58\u7A7F\u900F-\u7F13\u5B58\u96EA\u5D29-\u7F13\u5B58\u51FB\u7A7F">\u7F13\u5B58\u7A7F\u900F \u7F13\u5B58\u96EA\u5D29 \u7F13\u5B58\u51FB\u7A7F</a></li></ul></li></ul></nav><h2 id="mongodb" tabindex="-1">MongoDB <a class="header-anchor" href="#mongodb" aria-hidden="true">#</a></h2><p>MongoDB \u662F\u4E00\u4E2A\u57FA\u4E8E\u5206\u5E03\u5F0F\u6587\u4EF6\u5B58\u50A8\u7684\u6570\u636E\u5E93. \u7531 C++ \u8BED\u8A00\u7F16\u5199. \u65E8\u5728\u4E3A WEB \u5E94\u7528\u63D0\u4F9B\u53EF\u6269\u5C55\u7684\u9AD8\u6027\u80FD\u6570\u636E\u5B58\u50A8\u89E3\u51B3\u65B9\u6848</p><p>MongoDB \u5C06\u6570\u636E\u5B58\u50A8\u4E3A\u4E00\u4E2A\u6587\u6863, \u6570\u636E\u7ED3\u6784\u7531\u952E\u503C(key=&gt;value)\u5BF9\u7EC4\u6210. MongoDB \u6587\u6863\u7C7B\u4F3C\u4E8E JSON \u5BF9\u8C61. \u5B57\u6BB5\u503C\u53EF\u4EE5\u5305\u542B\u5176\u4ED6\u6587\u6863, \u6570\u7EC4\u53CA\u6587\u6863\u6570\u7EC4</p><h3 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h3><ul><li>\u6587\u6863\u7ED3\u6784\u7684\u5B58\u50A8\u65B9\u5F0F, \u80FD\u591F\u66F4\u4FBF\u6377\u5730\u83B7\u53D6\u6570\u636E</li><li>\u5185\u7F6EGridFS, \u652F\u6301\u5927\u5BB9\u91CF\u5B58\u50A8</li><li>\u6D77\u91CF\u6570\u636E\u4E0B, \u6027\u80FD\u4F18\u8D8A</li><li>\u52A8\u6001\u67E5\u8BE2</li><li>\u5168\u7D22\u5F15\u652F\u6301, \u6269\u5C55\u5230\u5185\u90E8\u5BF9\u8C61\u548C\u5185\u5D4C\u6570\u7EC4</li><li>\u67E5\u8BE2\u8BB0\u5F55\u5206\u6790</li><li>\u9AD8\u6548\u5B58\u50A8\u4E8C\u8FDB\u5236\u5927\u5BF9\u8C61 (\u6BD4\u5982\u7167\u7247\u548C\u89C6\u9891)</li><li>\u590D\u5236 (\u590D\u5236\u96C6)\u548C\u652F\u6301\u81EA\u52A8\u6545\u969C\u6062\u590D</li><li>\u5185\u7F6EAuto-Sharding\u81EA\u52A8\u5206\u7247\u652F\u6301\u4E91\u7EA7\u6269\u5C55\u6027, \u5206\u7247\u7B80\u5355</li><li>MapReduce\u652F\u6301\u590D\u6742\u805A\u5408</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>MongoDB 4.2 \u4E4B\u540E\u652F\u6301\u591A\u6587\u6863\u4E8B\u52A1</p></div><h3 id="bson\u6587\u6863" tabindex="-1">BSON\u6587\u6863 <a class="header-anchor" href="#bson\u6587\u6863" aria-hidden="true">#</a></h3><p>BSON\u6587\u6863\u7684\u6700\u5927\u5927\u5C0F\u4E3A16 MB</p><p>\u6700\u5927\u6587\u6863\u5927\u5C0F\u6709\u52A9\u4E8E\u786E\u4FDD\u5355\u4E2A\u6587\u6863\u4E0D\u4F1A\u4F7F\u7528\u8FC7\u591A\u7684RAM\u6216\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u5360\u7528\u8FC7\u591A\u7684\u5E26\u5BBD. \u8981\u5B58\u50A8\u5927\u4E8E\u6700\u5927\u5927\u5C0F\u7684\u6587\u6863, MongoDB\u63D0\u4F9B\u4E86GridFS API</p><p>MongoDB\u652F\u6301BSON\u6587\u6863\u5D4C\u5957\u7684\u7EA7\u522B\u4E0D\u8D85\u8FC7100</p><h3 id="objecld" tabindex="-1">Objecld <a class="header-anchor" href="#objecld" aria-hidden="true">#</a></h3><p>ObjectId \u662F\u4E00\u4E2A12\u5B57\u8282 BSON \u7C7B\u578B\u6570\u636E, \u6709\u4EE5\u4E0B\u683C\u5F0F:</p><p>\u524D4\u4E2A\u5B57\u8282\u8868\u793A\u65F6\u95F4\u6233 \u63A5\u4E0B\u6765\u76843\u4E2A\u5B57\u8282\u662F\u673A\u5668\u6807\u8BC6\u7801 \u7D27\u63A5\u7684\u4E24\u4E2A\u5B57\u8282\u7531\u8FDB\u7A0Bid\u7EC4\u6210 (PID) \u6700\u540E\u4E09\u4E2A\u5B57\u8282\u662F\u968F\u673A\u6570</p><h3 id="\u526F\u672C\u96C6" tabindex="-1">\u526F\u672C\u96C6 <a class="header-anchor" href="#\u526F\u672C\u96C6" aria-hidden="true">#</a></h3><p>\u526F\u672C\u96C6\u662F\u4E00\u7EC4\u6258\u7BA1\u76F8\u540C\u6570\u636E\u96C6\u7684mongo\u5B9E\u4F8B. \u5728\u526F\u672C\u96C6\u4E2D, \u4E00\u4E2A\u8282\u70B9\u662F\u4E3B\u8282\u70B9, \u53E6\u4E00\u4E2A\u662F\u8F85\u52A9\u8282\u70B9. \u4ECE\u4E3B\u8282\u70B9\u5230\u8F85\u52A9\u8282\u70B9, \u6240\u6709\u6570\u636E\u90FD\u4F1A\u590D\u5236</p><h3 id="profiler" tabindex="-1">Profiler <a class="header-anchor" href="#profiler" aria-hidden="true">#</a></h3><p>MongoDB\u6570\u636E\u5E93\u5206\u6790\u5668\u663E\u793A\u9488\u5BF9\u6570\u636E\u5E93\u7684\u6BCF\u4E2A\u64CD\u4F5C\u7684\u6027\u80FD\u7279\u5F81. \u60A8\u53EF\u4EE5\u4F7F\u7528\u63A2\u67E5\u5668\u627E\u5230\u6BD4\u5176\u6162\u7684\u67E5\u8BE2</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// \u4E3A\u6240\u6709\u6570\u636E\u5E93\u5F00\u542F\u6162\u67E5\u8BE2\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setProfilingLevel</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u6307\u5B9A\u6570\u636E\u5E93, \u5E76\u6307\u5B9A\u9608\u503C\u6162\u67E5\u8BE2 , \u8D85\u8FC720\u6BEB\u79D2\u7684\u67E5\u8BE2\u88AB\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">use test</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setProfilingLevel</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">slowms</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u968F\u673A\u91C7\u96C6\u6162\u67E5\u8BE2\u7684\u767E\u5206\u6BD4\u503C, sampleRate \u503C\u9ED8\u8BA4\u4E3A1, \u8868\u793A\u90FD\u91C7\u96C6, 0.42 \u8868\u793A\u91C7\u96C642%\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setProfilingLevel</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">sampleRate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.42</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u67E5\u8BE2\u6162\u67E5\u8BE2\u7EA7\u522B\u548C\u5176\u5B83\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getProfilingStatus</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;">// \u4EC5\u8FD4\u56DE\u6162\u67E5\u8BE2\u7EA7\u522B</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getProfilingLevel</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;">// \u7981\u7528\u6162\u67E5\u8BE2\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setProfilingLevel</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u67E5\u8BE2\u6700\u8FD1\u768410\u4E2A\u6162\u67E5\u8BE2\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">system</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">limit</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">ts </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pretty</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h2><h3 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h3><p><strong>\u4E94\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B</strong></p><p>String: \u5E38\u7528\u4E8E KV \u7F13\u5B58</p><p>Hash: \u5B58\u50A8\u7ED3\u6784\u5316\u6570\u636E, \u5982: \u4EA7\u54C1\u4FE1\u606F, \u7528\u6237\u4FE1\u606F\u7B49</p><p>List: \u5B58\u50A8\u5217\u8868, \u5982: \u7C89\u4E1D\u5217\u8868, \u6587\u7AE0\u8BC4\u8BBA\u5217\u8868\u7B49. \u53EF\u4EE5\u901A\u8FC7 lrange \u547D\u4EE4\u8FDB\u884C\u5206\u9875\u67E5\u8BE2</p><p>Set: \u5B58\u50A8\u53BB\u91CD\u5217\u8868, \u5982: \u7C89\u4E1D\u5217\u8868\u7B49. \u53EF\u4EE5\u57FA\u4E8E set \u73A9\u513F\u4EA4\u96C6, \u5E76\u96C6, \u5DEE\u96C6\u7684\u64CD\u4F5C. \u4F8B\u5982: \u6C42\u4E24\u4E2A\u4EBA\u7684\u5171\u540C\u597D\u53CB\u5217\u8868</p><p>Sorted Set: \u5B58\u50A8\u542B\u8BC4\u5206\u7684\u53BB\u91CD\u5217\u8868, \u5982: \u5404\u79CD\u6392\u884C\u699C</p><p><strong>\u9AD8\u7EA7\u6570\u636E\u7C7B\u578B</strong></p><p>Bitmaps, HyperLogLogs, GEO, Streams</p><h3 id="\u5185\u5B58\u6DD8\u6C70" tabindex="-1">\u5185\u5B58\u6DD8\u6C70 <a class="header-anchor" href="#\u5185\u5B58\u6DD8\u6C70" aria-hidden="true">#</a></h3><p>Redis \u8FC7\u671F\u7B56\u7565\u662F: \u5B9A\u671F\u5220\u9664 + \u60F0\u6027\u5220\u9664</p><ul><li>\u6D88\u6781\u65B9\u6CD5 (passive way), \u5728\u4E3B\u952E\u88AB\u8BBF\u95EE\u65F6\u5982\u679C\u53D1\u73B0\u5B83\u5DF2\u7ECF\u5931\u6548, \u90A3\u4E48\u5C31\u5220\u9664\u5B83</li><li>\u4E3B\u52A8\u65B9\u6CD5 (active way), \u5B9A\u671F\u4ECE\u8BBE\u7F6E\u4E86\u5931\u6548\u65F6\u95F4\u7684\u4E3B\u952E\u4E2D\u9009\u62E9\u4E00\u90E8\u5206\u5931\u6548\u7684\u4E3B\u952E\u5220\u9664</li></ul><p>Redis \u5185\u5B58\u6DD8\u6C70\u7B56\u7565:</p><ul><li>noeviction - \u5F53\u5185\u5B58\u4F7F\u7528\u8FBE\u5230\u9608\u503C\u7684\u65F6\u5019, \u6240\u6709\u5F15\u8D77\u7533\u8BF7\u5185\u5B58\u7684\u547D\u4EE4\u4F1A\u62A5\u9519. \u8FD9\u662F Redis \u9ED8\u8BA4\u7684\u7B56\u7565</li><li>allkeys-lru - \u5728\u4E3B\u952E\u7A7A\u95F4\u4E2D, \u4F18\u5148\u79FB\u9664\u6700\u8FD1\u672A\u4F7F\u7528\u7684 key</li><li>allkeys-random - \u5728\u4E3B\u952E\u7A7A\u95F4\u4E2D, \u968F\u673A\u79FB\u9664\u67D0\u4E2A key</li><li>volatile-lru - \u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D, \u4F18\u5148\u79FB\u9664\u6700\u8FD1\u672A\u4F7F\u7528\u7684 key</li><li>volatile-random - \u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D, \u968F\u673A\u79FB\u9664\u67D0\u4E2A key</li><li>volatile-ttl - \u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D, \u5177\u6709\u66F4\u65E9\u8FC7\u671F\u65F6\u95F4\u7684 key \u4F18\u5148\u79FB\u9664</li></ul><h3 id="\u6301\u4E45\u5316" tabindex="-1">\u6301\u4E45\u5316 <a class="header-anchor" href="#\u6301\u4E45\u5316" aria-hidden="true">#</a></h3><p>RDB \u5373\u67D0\u4E00\u65F6\u523B\u7684\u4E8C\u8FDB\u5236\u6570\u636E\u5FEB\u7167</p><p>AOF \u4F1A\u5C06\u5199\u547D\u4EE4\u4E0D\u65AD\u8FFD\u52A0\u5230 AOF \u6587\u672C\u65E5\u5FD7\u672B\u5C3E</p><p>\u5EFA\u8BAE\u540C\u65F6\u4F7F\u7528 RDB \u548C AOF. \u7528 AOF \u6765\u4FDD\u8BC1\u6570\u636E\u4E0D\u4E22\u5931, \u4F5C\u4E3A\u6570\u636E\u6062\u590D\u7684\u7B2C\u4E00\u9009\u62E9; \u7528 RDB \u6765\u505A\u4E0D\u540C\u7A0B\u5EA6\u7684\u51B7\u5907, \u5728 AOF \u6587\u4EF6\u90FD\u4E22\u5931\u6216\u635F\u574F\u4E0D\u53EF\u7528\u7684\u65F6\u5019, \u8FD8\u53EF\u4EE5\u4F7F\u7528 RDB \u6765\u8FDB\u884C\u5FEB\u901F\u7684\u6570\u636E\u6062\u590D</p><h3 id="\u4E8B\u52A1" tabindex="-1">\u4E8B\u52A1 <a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a></h3><p>Redis \u63D0\u4F9B\u7684\u4E0D\u662F\u4E25\u683C\u7684\u4E8B\u52A1, Redis \u53EA\u4FDD\u8BC1\u4E32\u884C\u6267\u884C\u547D\u4EE4, \u5E76\u4E14\u80FD\u4FDD\u8BC1\u5168\u90E8\u6267\u884C, \u4F46\u662F\u6267\u884C\u547D\u4EE4\u5931\u8D25\u65F6\u5E76\u4E0D\u4F1A\u56DE\u6EDA, \u800C\u662F\u4F1A\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB</p><h3 id="\u7F13\u5B58\u7A7F\u900F-\u7F13\u5B58\u96EA\u5D29-\u7F13\u5B58\u51FB\u7A7F" tabindex="-1">\u7F13\u5B58\u7A7F\u900F \u7F13\u5B58\u96EA\u5D29 \u7F13\u5B58\u51FB\u7A7F <a class="header-anchor" href="#\u7F13\u5B58\u7A7F\u900F-\u7F13\u5B58\u96EA\u5D29-\u7F13\u5B58\u51FB\u7A7F" aria-hidden="true">#</a></h3><p><strong>\u7F13\u5B58\u7A7F\u900F</strong></p><p>\u7F13\u5B58\u7A7F\u900F\u662F\u6307\u67E5\u8BE2\u4E00\u4E2A\u4E00\u5B9A\u4E0D\u5B58\u5728\u7684\u6570\u636E, \u7531\u4E8E\u7F13\u5B58\u662F\u4E0D\u547D\u4E2D\u65F6\u88AB\u52A8\u5199\u7684, \u5E76\u4E14\u51FA\u4E8E\u5BB9\u9519\u8003\u8651, \u5982\u679C\u4ECE\u5B58\u50A8\u5C42\u67E5\u4E0D\u5230\u6570\u636E\u5219\u4E0D\u5199\u5165\u7F13\u5B58, \u8FD9\u5C06\u5BFC\u81F4\u8FD9\u4E2A\u4E0D\u5B58\u5728\u7684\u6570\u636E\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8981\u5230\u5B58\u50A8\u5C42\u53BB\u67E5\u8BE2, \u5931\u53BB\u4E86\u7F13\u5B58\u7684\u610F\u4E49. \u5728\u6D41\u91CF\u5927\u65F6, \u53EF\u80FDDB\u5C31\u6302\u6389\u4E86, \u8981\u662F\u6709\u4EBA\u5229\u7528\u4E0D\u5B58\u5728\u7684key\u9891\u7E41\u653B\u51FB\u6211\u4EEC\u7684\u5E94\u7528, \u8FD9\u5C31\u662F\u6F0F\u6D1E</p><p>\u6709\u5F88\u591A\u79CD\u65B9\u6CD5\u53EF\u4EE5\u6709\u6548\u5730\u89E3\u51B3\u7F13\u5B58\u7A7F\u900F\u95EE\u9898, \u6700\u5E38\u89C1\u7684\u5219\u662F\u91C7\u7528\u5E03\u9686\u8FC7\u6EE4\u5668, \u5C06\u6240\u6709\u53EF\u80FD\u5B58\u5728\u7684\u6570\u636E\u54C8\u5E0C\u5230\u4E00\u4E2A\u8DB3\u591F\u5927\u7684bitmap\u4E2D, \u4E00\u4E2A\u4E00\u5B9A\u4E0D\u5B58\u5728\u7684\u6570\u636E\u4F1A\u88AB \u8FD9\u4E2Abitmap\u62E6\u622A\u6389, \u4ECE\u800C\u907F\u514D\u4E86\u5BF9\u5E95\u5C42\u5B58\u50A8\u7CFB\u7EDF\u7684\u67E5\u8BE2\u538B\u529B. \u53E6\u5916\u4E5F\u6709\u4E00\u4E2A\u66F4\u4E3A\u7B80\u5355\u7C97\u66B4\u7684\u65B9\u6CD5 (\u6211\u4EEC\u91C7\u7528\u7684\u5C31\u662F\u8FD9\u79CD), \u5982\u679C\u4E00\u4E2A\u67E5\u8BE2\u8FD4\u56DE\u7684\u6570\u636E\u4E3A\u7A7A (\u4E0D\u7BA1\u662F\u6570 \u636E\u4E0D\u5B58\u5728, \u8FD8\u662F\u7CFB\u7EDF\u6545\u969C), \u6211\u4EEC\u4ECD\u7136\u628A\u8FD9\u4E2A\u7A7A\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58, \u4F46\u5B83\u7684\u8FC7\u671F\u65F6\u95F4\u4F1A\u5F88\u77ED, \u6700\u957F\u4E0D\u8D85\u8FC7\u4E94\u5206\u949F</p><p><strong>\u7F13\u5B58\u96EA\u5D29</strong></p><p>\u7F13\u5B58\u96EA\u5D29\u662F\u6307\u5728\u6211\u4EEC\u8BBE\u7F6E\u7F13\u5B58\u65F6\u91C7\u7528\u4E86\u76F8\u540C\u7684\u8FC7\u671F\u65F6\u95F4, \u5BFC\u81F4\u7F13\u5B58\u5728\u67D0\u4E00\u65F6\u523B\u540C\u65F6\u5931\u6548, \u8BF7\u6C42\u5168\u90E8\u8F6C\u53D1\u5230DB, DB\u77AC\u65F6\u538B\u529B\u8FC7\u91CD\u96EA\u5D29</p><p>\u7F13\u5B58\u5931\u6548\u65F6\u7684\u96EA\u5D29\u6548\u5E94\u5BF9\u5E95\u5C42\u7CFB\u7EDF\u7684\u51B2\u51FB\u975E\u5E38\u53EF\u6015. \u5927\u591A\u6570\u7CFB\u7EDF\u8BBE\u8BA1\u8005\u8003\u8651\u7528\u52A0\u9501\u6216\u8005\u961F\u5217\u7684\u65B9\u5F0F\u4FDD\u8BC1\u7F13\u5B58\u7684\u5355\u7EBF \u7A0B (\u8FDB\u7A0B)\u5199, \u4ECE\u800C\u907F\u514D\u5931\u6548\u65F6\u5927\u91CF\u7684\u5E76\u53D1\u8BF7\u6C42\u843D\u5230\u5E95\u5C42\u5B58\u50A8\u7CFB\u7EDF\u4E0A. \u8FD9\u91CC\u5206\u4EAB\u4E00\u4E2A\u7B80\u5355\u65B9\u6848\u5C31\u65F6\u8BB2\u7F13\u5B58\u5931\u6548\u65F6\u95F4\u5206\u6563\u5F00, \u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u5728\u539F\u6709\u7684\u5931\u6548\u65F6\u95F4\u57FA\u7840\u4E0A\u589E\u52A0\u4E00\u4E2A\u968F\u673A\u503C, \u6BD4\u59821-5\u5206\u949F\u968F\u673A, \u8FD9\u6837\u6BCF\u4E00\u4E2A\u7F13\u5B58\u7684\u8FC7\u671F\u65F6\u95F4\u7684\u91CD\u590D\u7387\u5C31\u4F1A\u964D\u4F4E, \u5C31\u5F88\u96BE\u5F15\u53D1\u96C6\u4F53\u5931\u6548\u7684\u4E8B\u4EF6</p><p><strong>\u7F13\u5B58\u51FB\u7A7F</strong></p><p>\u5BF9\u4E8E\u4E00\u4E9B\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684key, \u5982\u679C\u8FD9\u4E9Bkey\u53EF\u80FD\u4F1A\u5728\u67D0\u4E9B\u65F6\u95F4\u70B9\u88AB\u8D85\u9AD8\u5E76\u53D1\u5730\u8BBF\u95EE, \u662F\u4E00\u79CD\u975E\u5E38 &quot;\u70ED\u70B9&quot; \u7684\u6570\u636E. \u8FD9\u4E2A\u65F6\u5019, \u9700\u8981\u8003\u8651\u4E00\u4E2A\u95EE\u9898: \u7F13\u5B58\u88AB &quot;\u51FB\u7A7F&quot; \u7684\u95EE\u9898, \u8FD9\u4E2A\u548C\u7F13\u5B58\u96EA\u5D29\u7684\u533A\u522B\u5728\u4E8E\u8FD9\u91CC\u9488\u5BF9\u67D0\u4E00key\u7F13\u5B58, \u524D\u8005\u5219\u662F\u5F88\u591Akey</p><p>\u7F13\u5B58\u5728\u67D0\u4E2A\u65F6\u95F4\u70B9\u8FC7\u671F\u7684\u65F6\u5019, \u6070\u597D\u5728\u8FD9\u4E2A\u65F6\u95F4\u70B9\u5BF9\u8FD9\u4E2AKey\u6709\u5927\u91CF\u7684\u5E76\u53D1\u8BF7\u6C42\u8FC7\u6765, \u8FD9\u4E9B\u8BF7\u6C42\u53D1\u73B0\u7F13\u5B58\u8FC7\u671F\u4E00\u822C\u90FD\u4F1A\u4ECE\u540E\u7AEFDB\u52A0\u8F7D\u6570\u636E\u5E76\u56DE\u8BBE\u5230\u7F13\u5B58, \u8FD9\u4E2A\u65F6\u5019\u5927\u5E76\u53D1\u7684\u8BF7\u6C42\u53EF\u80FD\u4F1A\u77AC\u95F4\u628A\u540E\u7AEFDB\u538B\u57AE</p><ul><li>\u4F7F\u7528\u4E92\u65A5\u9501 (mutex key)</li><li>&quot;\u63D0\u524D&quot; \u4F7F\u7528\u4E92\u65A5\u9501 (mutex key)</li><li>&quot;\u6C38\u8FDC\u4E0D\u8FC7\u671F&quot;</li><li>\u8D44\u6E90\u4FDD\u62A4</li></ul>`,52),p=[o];function t(r,i,c,d,y,D){return a(),l("div",null,p)}const C=s(e,[["render",t]]);export{h as __pageData,C as default};