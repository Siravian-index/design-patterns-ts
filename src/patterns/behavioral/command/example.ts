import { Invoker, Post, UpdatePostPointsCommand, UpdatePostStatusCommand, } from './command';
function clientCode() {
  const post = new Post("Clean Code")
  console.log("Post Before Update")
  console.log(post)
  console.log("----------------")

  const invoker = new Invoker()
  const updateStatusCommand = new UpdatePostStatusCommand(post, "ACCEPTED")
  invoker.setCommand(updateStatusCommand)
  invoker.executeCommand()
  console.log("Post After status Update")
  console.log(post)
  console.log("----------------")



  const commands = new Array(10).fill(0).map((_, i) => {
    return new UpdatePostPointsCommand(post, i)
  })

  console.log("Array of commands ready to be apply")
  console.log(commands)
  console.log("----------------")
  commands.forEach((command) => {
    invoker.setCommand(command)
    invoker.executeCommand()
  })

  console.log("Post After Loop of commands")
  console.log(post)
  console.log("----------------")

}

clientCode()