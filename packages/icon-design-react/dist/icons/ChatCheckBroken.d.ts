import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckBroken: ForwardRefExoticComponent<ChatCheckBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckBroken;
export { ChatCheckBroken };
