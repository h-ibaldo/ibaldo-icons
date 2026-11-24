import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEyeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEyeRound: ForwardRefExoticComponent<ChatEyeRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatEyeRound;
export { ChatEyeRound };
