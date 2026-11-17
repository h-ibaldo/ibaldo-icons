import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCornerWide: ForwardRefExoticComponent<ChatPlusCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCornerWide;
export { ChatPlusCornerWide };
