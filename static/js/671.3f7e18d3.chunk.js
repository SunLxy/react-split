"use strict";(self.webpackChunk_uiw_react_split=self.webpackChunk_uiw_react_split||[]).push([[671],{67671:function(n,e,t){t.r(e),e.default="Split \u9762\u677f\u5206\u5272\n===\n\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-split.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-split)\n[![Build & Deploy](https://github.com/uiwjs/react-split/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-split/actions/workflows/ci.yml)\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-split/file/README.md)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-split.svg)](https://www.npmjs.com/package/@uiw/react-split)\n[![Coverage Status](https://uiwjs.github.io/react-split/badges.svg)](https://uiwjs.github.io/react-split/coverage/lcov-report/)\n\n\u53ef\u5c06\u4e00\u5757\u5185\u5bb9\uff0c\u5206\u5272\u4e3a\u53ef\u4ee5\u62d6\u62fd\u8c03\u6574\u5bbd\u5ea6\u6216\u9ad8\u5ea6\u7684\u533a\u57df\u3002\n\n```jsx\nimport { Split } from 'uiw';\n```\n\n\u4ece\u7ec4\u4ef6\u5e93 `uiw` \u4e2d\u62bd\u79bb\u51fa\u6765\u7684 `@uiw/react-split`\uff0c\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\u3002\n\n```jsx\nimport Split from '@uiw/react-split';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n> ~~\u901a\u8fc7\u8bbe\u7f6e\u5b50\u8282\u70b9\u7684 `minWidth` \u6837\u5f0f\uff0c\u5373\u53ef\u8bbe\u7f6e\u62d6\u62fd\u6700\u5c0f\u5bbd\u5ea6\u503c\u3002\u901a\u8fc7\u8bbe\u7f6e\u5b50\u8282\u70b9\u6837\u5f0f `flexBasis` \u6837\u5f0f\u5373\u53ef\u8bbe\u7f6e\u9ed8\u8ba4\u5206\u5272\u5185\u5bb9\u7684\u5360\u6bd4\u5bbd\u5ea6\u3002~~\n\n- \u56fa\u5b9a\u521d\u59cb\u5bbd\u5ea6\u6216\u8005\u9ad8\u5ea6\uff0c\u53ef\u901a\u8fc7\u8bbe\u7f6e\u5b50\u8282\u70b9\uff0c\u6837\u5f0f `width: '80%'` \u5bbd\u5ea6\u767e\u5206\u767e\u6765\u8ba1\u7b97\u3002\n- \u62d6\u62fd\u81f3\u6700\u5c0f\u5bbd\u5ea6\uff0c\u53ef\u901a\u8fc7\u8bbe\u7f6e\u5b50\u8282\u70b9\u6837\u5f0f `minWidth: 30`\uff0c\u6765\u8fbe\u5230\u6548\u679c\n- \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u8bbe\u7f6e\u6837\u5f0f `width`\uff0c\u9700\u8981\u5c06\u67d0\u4e2a\u5b50\u8282\u70b9\u6837\u5f0f\u8bbe\u4e3a `flex: 1`\uff0c\u6765\u81ea\u9002\u5e94\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <div>\n    <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div style={{ width: '20%', minWidth: 30 }}>\n        <iframe\n          srcDoc=\"<div>test</div>\"\n          style={{ width: '100%', height: '100%' }}\n          title=\"Code Preview\"\n          sandbox=\"allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts\"\n        />\n      </div>\n      <div style={{ width: '80%', minWidth: 100 }}>\n        Right Pane\n      </div>\n    </Split>\n    <Split\n      style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}\n    >\n      <div style={{ minWidth: 60 }}>\n        test\n      </div>\n      <div  style={{ minWidth: 80, flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u53ef\u7528\u4e8e\u5e03\u5c40\n\n\u8bbe\u7f6e `visiable={false}` \u7981\u7528\u62d6\u62fd\u680f\uff0c\u53ef\u7528\u4e8e\u5e03\u5c40\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <div>\n    <Split mode=\"vertical\" visiable={false}>\n      <div style={{ minHeight: 45, background: '#dcdcdc' }}>\n        Header\n      </div>\n      <Split visiable={false}>\n        <div style={{ minWidth: 200, maxWidth: 200, minHeight: 120, background: '#b5b5b5' }}>\n          Sider\n        </div>\n        <div style={{ width: '100%', background: '#ececec' }}>\n          Content\n        </div>\n      </Split>\n      <div style={{ minHeight: 45, background: '#dcdcdc' }}>\n        Footer\n      </div>\n    </Split>\n    <div style={{ height: 20 }}></div>\n    <Split visiable={false}>\n      <div style={{ minWidth: 200, maxWidth: 200, minHeight: 85, background: '#a9a9a9' }}>\n        Sider\n      </div>\n      <Split mode=\"vertical\" visiable={false} style={{ width: '100%' }}>\n        <div style={{ minHeight: 45, background: '#dcdcdc' }}>\n          Header\n        </div>\n        <div style={{ minHeight: 85, background: '#b5b5b5' }}>\n          Content\n        </div>\n        <div style={{ minHeight: 45, background: '#dcdcdc' }}>\n          Footer\n        </div>\n      </Split>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u591a\u680f\u5206\u5272\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div>\n      Left Pane\n    </div>\n    <div>\n      Center Pane\n    </div>\n    <div>\n      Center Pane\n    </div>\n    <div style={{ flex: 1 }}>\n      Right Pane\n    </div>\n  </Split>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u7ebf\u6761\u62d6\u62fd\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <div>\n    <Split lineBar style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div>\n        Left Pane\n      </div>\n      <div>\n        Center Pane\n      </div>\n      <div>\n        Center Pane\n      </div>\n      <div style={{ flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n    <Split mode=\"vertical\" lineBar style={{ height: 210, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>\n      <div style={{ height: '33.3%' }}>\n        Left Pane\n      </div>\n      <div style={{ height: '33.3%' }}>\n        Center Pane\n      </div>\n      <div style={{ flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u5782\u76f4\u5206\u5272\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <Split mode=\"vertical\" style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div style={{ height: '50%' }}>\n      Top Pane\n    </div>\n    <div style={{ height: '50%' }}>\n      Bottom Pane\n    </div>\n  </Split>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u5d4c\u5957\u4f7f\u7528\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <Split style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <Split mode=\"vertical\">\n      <div style={{ height: '50%' }}>\n        Top Pane\n      </div>\n      <Split style={{ height: '50%' }}>\n        <div>\n          Left Pane\n        </div>\n        <div style={{ flex: 1 }}>\n          Right Pane\n        </div>\n      </Split>\n    </Split>\n    <div style={{ flex: 1 }}>\n      Right Pane\n    </div>\n  </Split>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u62d6\u62fd\u5de5\u5177\u4e0d\u663e\u793a\n\n\u4e0b\u9762\u5b9e\u4f8b\u901a\u8fc7\u8bbe\u7f6e `visiable` \u7684\u503c\u6765\u8bbe\u7f6e\u62d6\u62fd\u5de5\u5177\u662f\u5426\u53ef\u89c1\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <div>\n    <Split visiable={false} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>\n        Left Pane\n      </div>\n      <div style={{ flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n    <Split visiable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>\n      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>\n        Pane 1\n      </div>\n      <div style={{ maxWidth: 60 }}>\n        Pane 2\n      </div>\n      <div>\n        Pane 3\n      </div>\n      <div>\n        Pane 4\n      </div>\n      <div style={{ flex: 1 }}>\n        Pane 5\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u7981\u7528\u62d6\u62fd\n\n\u901a\u8fc7\u8bbe\u7f6e `disable` \u7684\u503c\uff0c\u7981\u7528\u62d6\u62fd\u5de5\u5177\u62d6\u62fd\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <div>\n    <Split disable style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>\n        Left Pane\n      </div>\n      <Split disable mode=\"vertical\">\n        <div>\n          Top Pane\n        </div>\n        <div>\n          Bottom Pane\n        </div>\n      </Split>\n      <div style={{ flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n    <Split disable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>\n      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>\n        Pane 1\n      </div>\n      <div style={{ maxWidth: 60 }}>\n        Pane 2\n      </div>\n      <div>\n        Pane 3\n      </div>\n      <div>\n        Pane 4\n      </div>\n      <div style={{ flex: 1 }}>\n        Pane 5\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u62bd\u5c49\n\n\u53ef\u62d6\u62fd\u5de6\u8fb9\u680f\u5bbd\u5ea6\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\nimport { Menu, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      width: 210,\n    };\n  }\n  onClick() {\n    this.setState({\n      width: this.state.width === 0 ? 210 : 0,\n    });\n  }\n  render() {\n    const styl = {};\n    if (this.state.width === 0) {\n      styl.width = `0%`;\n    } else {\n      styl.width = this.state.width;\n    }\n    return (\n      <>\n        <div style={{ marginBottom: 10 }}>\n          <Button type=\"primary\" onClick={this.onClick.bind(this)}>{this.state.width === 0 ? '\u9690\u85cf\u83dc\u5355' : '\u5c55\u793a\u83dc\u5355'}</Button>\n        </div>\n        <Split lineBar visiable={this.state.width !== 0} style={{ border: '1px solid #d5d5d5', borderRadius: 3 }}>\n          <div style={{ ...styl, overflow: 'hidden' }}>\n            <Menu>\n              <Menu.Item icon=\"heart-on\" text=\"\u53e6\u5b58\u4e3a\" active />\n              <Menu.Item icon=\"appstore\" text=\"\u5e94\u7528\u5546\u57ce\" />\n              <Menu.Item icon=\"bar-chart\" text=\"\u6708\u7edf\u8ba1\u62a5\u8868\u5bfc\u51fa\" />\n              <Menu.Item icon=\"setting\" text=\"\u504f\u597d\u8bbe\u7f6e\" />\n              <Menu.Divider />\n              <Menu.Item icon=\"map\" text=\"\u8c37\u6b4c\u5730\u56fe\" />\n            </Menu>\n          </div>\n          <div style={{ flex: 1, minWidth: 30 }}>\n            Right Pane\n          </div>\n        </Split>\n      </>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u652f\u6301\u81ea\u5b9a\u4e49\u62d6\u62fd\u5de5\u5177\u680f\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport Split from '@uiw/react-split';\n\nconst Demo = () => (\n  <div>\n    <Split\n      renderBar={({ onMouseDown, ...props }) => {\n        return (\n          <div {...props} style={{ boxShadow: 'none', background: 'transparent' }}>\n            <div onMouseDown={onMouseDown} style={{ backgroundColor: '#ff000057', boxShadow: 'none' }} />\n          </div>\n        );\n      }}\n      style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}\n    >\n      <div style={{ minWidth: 60 }}>\n        test\n      </div>\n      <div style={{ minWidth: 80, flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n```ts\nexport interface SplitProps extends  Omit<React.HTMLAttributes<HTMLDivElement>, 'onDragEnd'> {\n  style?: React.CSSProperties;\n  className?: string;\n  prefixCls?: string;\n  /**\n   * \u62d6\u62fd\u5bbd\u5ea6/\u9ad8\u5ea6\u53d8\u5316\u56de\u8c03\u51fd\u6570\uff0c\u5bbd\u5ea6\u6216\u8005\u9ad8\u5ea6\u6839\u636e mode \u53c2\u6570\u6765\u786e\u5b9a\n   */\n  onDragging?: (preSize: number, nextSize: number, paneNumber: number) => void;\n  /**\n   * \u62d6\u62fd\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\n   */\n  onDragEnd?: (preSize: number, nextSize: number, paneNumber: number) => void;\n  /** \u652f\u6301\u81ea\u5b9a\u4e49\u62d6\u62fd\u5de5\u5177\u680f */\n  renderBar?: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;\n  /**\n   * \u8bbe\u7f6e\u62d6\u62fd\u7684\u5de5\u5177\u6761\uff0c\u4e3a\u7ebf\u6761\u6837\u5f0f\u3002\n   */\n  lineBar?: boolean;\n  /**\n   * \u8bbe\u7f6e\u62d6\u62fd\u7684\u5de5\u5177\u6761\uff0c\u662f\u5426\u53ef\u89c1\n   */\n  visiable?: boolean | number[];\n  /**\n   * \u8bbe\u7f6e\u62d6\u62fd\u7684\u5de5\u5177\u6761\uff0c\u7981\u7528\n   */\n  disable?: boolean | number[];\n  /**\n   * \u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a `horizontal` \u6216 `vertical`\n   */\n  mode?: 'horizontal' | 'vertical';\n}\n```\n\n## Development\n\nRuns the project in development mode.  \n\n```bash\n# Step 1, run first, listen to the component compile and output the .js file\nnpm run watch\nnpm run build\n# Step 2, development mode, listen to compile preview website instance\nnpm run doc\n```\n\n**production**\n\nBuilds the app for production to the build folder.\n\n```bash\nnpm run released\n```\n\nThe build is minified and the filenames include the hashes.\nYour app is ready to be deployed!\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-split/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-split/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n### License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=671.3f7e18d3.chunk.js.map