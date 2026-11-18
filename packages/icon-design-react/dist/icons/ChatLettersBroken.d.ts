import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLettersBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLettersBroken: ForwardRefExoticComponent<ChatLettersBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatLettersBroken;
export { ChatLettersBroken };
