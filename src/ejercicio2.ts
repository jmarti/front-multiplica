

export type collaborator = () => Promise<string>;


export async function func(runCollaborator: collaborator) {
    const promise = runCollaborator();

    const timeoutPromise = new Promise((resolve, _) => {
        setTimeout(() => {
          console.log('La prome se demoró');
          resolve("");
        }, 3000);
    })

    return await Promise.race([promise, timeoutPromise]);
};
