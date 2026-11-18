import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatImageCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatImageCornerWide: ForwardRefExoticComponent<ChatImageCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatImageCornerWide;
export { ChatImageCornerWide };
