import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSunBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSunBoxy: ForwardRefExoticComponent<ChatStackSunBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSunBoxy;
export { ChatStackSunBoxy };
