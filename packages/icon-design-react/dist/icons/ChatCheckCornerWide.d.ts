import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCornerWide: ForwardRefExoticComponent<ChatCheckCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCornerWide;
export { ChatCheckCornerWide };
