import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHashWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHashWide: ForwardRefExoticComponent<ChatHashWideProps & RefAttributes<SVGSVGElement>>;

export default ChatHashWide;
export { ChatHashWide };
