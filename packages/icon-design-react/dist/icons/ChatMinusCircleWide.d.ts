import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCircleWide: ForwardRefExoticComponent<ChatMinusCircleWideProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCircleWide;
export { ChatMinusCircleWide };
