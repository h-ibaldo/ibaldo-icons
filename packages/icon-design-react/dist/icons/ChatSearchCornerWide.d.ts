import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSearchCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSearchCornerWide: ForwardRefExoticComponent<ChatSearchCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatSearchCornerWide;
export { ChatSearchCornerWide };
