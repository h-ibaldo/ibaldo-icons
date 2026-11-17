import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCornerWide: ForwardRefExoticComponent<ChatMinusCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCornerWide;
export { ChatMinusCornerWide };
