import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardCornerWide: ForwardRefExoticComponent<ChatForwardCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardCornerWide;
export { ChatForwardCornerWide };
