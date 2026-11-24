import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextWideSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextWideSide: ForwardRefExoticComponent<ChatTextWideSideProps & RefAttributes<SVGSVGElement>>;

export default ChatTextWideSide;
export { ChatTextWideSide };
