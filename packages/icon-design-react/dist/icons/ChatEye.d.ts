import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEye: ForwardRefExoticComponent<ChatEyeProps & RefAttributes<SVGSVGElement>>;

export default ChatEye;
export { ChatEye };
