import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEyeWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEyeWide: ForwardRefExoticComponent<ChatEyeWideProps & RefAttributes<SVGSVGElement>>;

export default ChatEyeWide;
export { ChatEyeWide };
