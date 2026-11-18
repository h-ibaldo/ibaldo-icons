import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextSide: ForwardRefExoticComponent<ChatTextSideProps & RefAttributes<SVGSVGElement>>;

export default ChatTextSide;
export { ChatTextSide };
