import Avatar from "boring-avatars";

export default function ProfileAvatar({ name }: { name: string }) {
    return (
        <Avatar name={name} />
    )
}
