type Status = "PUBLISHED" | "ACCEPTED" | "PENDING"

export interface Command {
    execute(): void
}


export class UpdatePostStatusCommand implements Command {
    private post: Post
    private status: Status

    constructor(post: Post, status: Status) {
        this.post = post
        this.status = status
    }

    execute(): void {
        this.post.updatePublishStatus(this.status)
    }
}

export class UpdatePostPointsCommand implements Command {
    private post: Post
    private points: number

    constructor(post: Post, points: number) {
        this.post = post
        this.points = points
    }

    execute(): void {
        this.post.updatePostPoints(this.points)
    }
}

// Receiver
export class Post {
    private status: Status = "PENDING"
    private title: string
    private points: number  = 0

    constructor(title: string) {
        this.title = title
    }

    updatePublishStatus(status: Status) {
        this.status = status
    }

    updatePostPoints(points: number) {
        this.points += points
    }
}


// Invoker / Sender
export class Invoker {
    private command?: Command

    setCommand(command: Command) {
        this.command = command
    }

    executeCommand() {
        if (this.command) {
            this.command.execute()
        }
    }
}