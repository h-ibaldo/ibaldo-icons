import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWide: ForwardRefExoticComponent<ChatWideProps & RefAttributes<SVGSVGElement>>;

export default ChatWide;
export { ChatWide };
