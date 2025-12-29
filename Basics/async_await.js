// Async / Await
    // async/await is a control-flow abstraction over Promises that enables non-blocking execution while preserving readable, sequential syntax.

    async function fetchData() {
        return "Data fetched";
    }
    // Using await to wait for a promise to resolve
    async function getData() {
        const data = await fetchData();
        console.log(data);
    }
    // getData();

// Sequential vs parallel execution
    // Sequential execution
    // Tasks that depend on each other must be awaited in sequence
    async function sequential() {
        const a = await taskA();  // must finish first
        const b = await taskB();  // waits for A
        return a + b;
    }


    // Parallel execution
    // Independent tasks can be initiated simultaneously
    async function parallel() {
        const [a, b] = await Promise.all([
            taskA(),
            taskB()
        ]);
        return a + b;
    }

// Error handling with try/catch
    // 
    async function fetchWithErrorHandling() {
        try {
            const data = await fetchData();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }  
    }
    fetchWithErrorHandling();

// Async loops
// Using for...of with await
    async function processItems(items) {
        for (const item of items) {
            await processItem(item);
        }
    }

// Performance optimization
// Using Promise.all for concurrent operations
    async function fetchAll(urls) {
        const promises = urls.map(url => fetch(url));
        const results = await Promise.all(promises);
        return results;
    }
