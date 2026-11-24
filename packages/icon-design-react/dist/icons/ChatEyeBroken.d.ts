import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEyeBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEyeBroken: ForwardRefExoticComponent<ChatEyeBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatEyeBroken;
export { ChatEyeBroken };
