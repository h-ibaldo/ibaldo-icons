import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCornerWide: ForwardRefExoticComponent<ChatXCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatXCornerWide;
export { ChatXCornerWide };
