type Status = "PUBLISHED" | "ACCEPTED" | "PENDING"

export interface Command {
    execute(): void
}


export class UpdatePostStatusCommand implements Command {
    private post: Post
    private status: Status

    updatePostStatus(post: Post, status: Status) {
        this.post = post
        this.status = status
        return this
    }

    execute(): void {
        this.post.updatePublishStatus(this.status)
    }
}

export class UpdatePostPointsCommand implements Command {
    private post: Post
    private points: number

    updatePostPoints(post: Post, points: number) {
        this.post = post
        this.points = points
        return this
    }

    execute(): void {
        this.post.updatePostPoints(this.points)
    }
}

// Receiver
export class Post {
    private status: Status = "PENDING"
    private title: string
    private content: string
    private tags: string[] = []
    private points: number  = 0

    constructor(title: string, content: string) {
        this.title = title
        this.content = content
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