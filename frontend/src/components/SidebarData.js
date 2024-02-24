import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />,
        path: "/",
    },
    {
        title: "メール",
        icon: <AttachEmailIcon />,
        path: "/mail",
    },
    {
        title: "アナリティクス",
        icon: <AssessmentIcon />,
        path: "/analitics",
    },
    {
        title: "友達追加",
        icon: <PersonAddIcon />,
        path: "/friends",
    },
    {
        title: "お支払い設定",
        icon: <AddCardIcon />,
        path: "/payment",
    },
    {
        title: "アップロード",
        icon: <BackupIcon />,
        path: "/upload",
    },
    {
        title: "詳細設定",
        icon: <SettingsIcon />,
        path: "/rocket",
    },
];
