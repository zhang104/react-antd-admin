import React from "react";
import { Tabs, Row, Col, message } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import * as AntdIcon from "@ant-design/icons";
import antdIconsColor from "./antd-icon-color";
import antdIcons from "./antd-icon";
import IconFontValues from "./iconfont";

const { TabPane } = Tabs;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1968786_ddivbdaztyv.js",
});
const antdIcon: { [key: string]: any } = AntdIcon;

export default () => {
  const onCopy = (text: string, result: boolean) => {
    if (result) {
      /* 复制成功 */
      message.success(`${text}复制成功`);
    } else {
      /* 复制失败 */
      message.error(`${text}复制失败`);
    }
  };
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="基本用法" key="components-icon-demo-basic">
          <Row gutter={24}>
            {antdIcons.map((item, index) => (
              <CopyToClipboard text={`<${item} />`} onCopy={onCopy} key={index}>
                <Col
                  span={4}
                  style={{
                    textAlign: "center",
                    lineHeight: "50px",
                    cursor: "pointer",
                  }}
                >
                  {React.createElement(antdIcon[item])}
                </Col>
              </CopyToClipboard>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="多色图标" key="components-icon-demo-two-tone">
          <Row gutter={24}>
            {antdIconsColor.map((item, index) => (
              <CopyToClipboard text={`<${item} />`} onCopy={onCopy} key={index}>
                <Col
                  span={4}
                  style={{
                    textAlign: "center",
                    lineHeight: "50px",
                    cursor: "pointer",
                  }}
                >
                  {React.createElement(antdIcon[item])}
                </Col>
              </CopyToClipboard>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="使用 iconfont.cn " key="components-icon-demo-iconfont">
          <div>
            一定要看的使用说明：参考
            <a
              target="_blank"
              href="https://ant.design/components/icon-cn/#components-icon-demo-iconfont"
            >
              https://ant.design/components/icon-cn/#components-icon-demo-iconfont
            </a>
          </div>
          <Row gutter={24}>
            {IconFontValues.map((item, index) => (
              <CopyToClipboard
                text={`<IconFont type="${item}" />`}
                onCopy={onCopy}
                key={index}
              >
                <Col
                  span={4}
                  style={{
                    textAlign: "center",
                    lineHeight: "50px",
                    cursor: "pointer",
                  }}
                >
                  <IconFont type={item} />
                </Col>
              </CopyToClipboard>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};
