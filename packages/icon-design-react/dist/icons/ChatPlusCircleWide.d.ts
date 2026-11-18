import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircleWide: ForwardRefExoticComponent<ChatPlusCircleWideProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircleWide;
export { ChatPlusCircleWide };
