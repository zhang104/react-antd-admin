import { Input, Typography, message } from "antd"
import React, { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"

const { Search } = Input
const { Text } = Typography

const Clipboard: React.FC = () => {
  const [value, setValue] = useState(
    "https://github.com/zxf4399/react-antd-admin.git"
  )
  return (
    <Search
      enterButton={
        <CopyToClipboard
          onCopy={(text, result) => {
            if (result) {
              message.success("复制成功")
            } else {
              message.error("复制失败")
            }
          }}
          text={value}
        >
          <Text style={{ color: "#fff" }}>复制</Text>
        </CopyToClipboard>
      }
      onChange={(e) => setValue(e.target.value)}
      style={{ width: 400 }}
      value={value}
    />
  )
}

export default Clipboard
