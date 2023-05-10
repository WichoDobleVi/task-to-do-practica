import { Badge } from "@nextui-org/react"
import { FC } from "react";
import { color } from "../../utils";

interface BadgeStatusProps {
    status: string;
}

export const BadgeStatus: FC<BadgeStatusProps> = ({ status }) =>  <Badge color={color(status)}>{status}</Badge>
