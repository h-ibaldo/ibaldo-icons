import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusWide: ForwardRefExoticComponent<ChatMinusWideProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusWide;
export { ChatMinusWide };
