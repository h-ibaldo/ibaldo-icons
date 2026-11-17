import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsVerticalWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsVerticalWide: ForwardRefExoticComponent<ChatDotsVerticalWideProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsVerticalWide;
export { ChatDotsVerticalWide };
