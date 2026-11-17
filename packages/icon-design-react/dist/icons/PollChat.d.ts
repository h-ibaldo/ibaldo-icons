import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollChat: ForwardRefExoticComponent<PollChatProps & RefAttributes<SVGSVGElement>>;

export default PollChat;
export { PollChat };
