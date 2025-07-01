import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import {ButtonWrapper} from './style'
import Button from "@cloudscape-design/components/button";
interface IProps {
  name?: ReactNode
}
const ButtonTest: FC<IProps> = () => {
  return <ButtonWrapper>
    <Button variant="primary" iconName="copy" data-testid="copy-button">复制</Button>
  </ButtonWrapper>
}

export default memo(ButtonTest)