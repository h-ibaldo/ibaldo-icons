import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOneCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOneCircleWide: ForwardRefExoticComponent<ChatOneCircleWideProps & RefAttributes<SVGSVGElement>>;

export default ChatOneCircleWide;
export { ChatOneCircleWide };
