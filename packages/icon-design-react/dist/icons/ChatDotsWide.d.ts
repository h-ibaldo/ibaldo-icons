import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsWide: ForwardRefExoticComponent<ChatDotsWideProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsWide;
export { ChatDotsWide };
