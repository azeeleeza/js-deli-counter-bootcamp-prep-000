function takeANumber(line, name) {
    line.push(name)
    var position = line.length
    return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line) {
    console.log(line)
    if (line.length) {
        return "Currently serving " + line[0] + "."
    } else {
        return "There is nobody waiting to be served!"
    }
}

function currentLine(line) {
    var current = "The line is currently: "
    if (!line.length) {
        return "The line is currently empty."
    } else {
        for (let i = 0; i < line.length; i++) {
            if(i==0){
              current += i+1 + ". " + line[i]
            } else {
            current += ", " + parseInt(i + 1) + ". " + line[i]
          }
        }
        return current
    }
}
