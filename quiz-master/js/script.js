/**
 * CSE QUIZ MASTER - CORE LOGIC
 */

/**
 * CSE QUIZ MASTER - EXPANDED QUESTION BANK (30 questions per subcategory)
 * Replace ONLY the questionBank object with this.
 */

const questionBank = {
    programming: {
        title: "Programming",
        icon: "fas fa-code",
        desc: "Master C, Java, Python, JavaScript, and SQL basics.",
        subcategories: {
            c: {
                title: "C Language",
                questions: [
                    // --- Existing 15 ---
                    { q: "Who is the father of C?", options: ["Jobs", "Gosling", "Ritchie", "Lerdorf"], correct: 2 },
                    { q: "A pointer stores:", options: ["Value", "Address", "Function", "Loop"], correct: 1 },
                    { q: "Keyword to exit loop?", options: ["return", "exit", "terminate", "break"], correct: 3 },
                    { q: "Size of 'int'?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], correct: 2 },
                    { q: "String ends with?", options: ["\\n", "\\t", "\\0", "\\r"], correct: 2 },
                    { q: "Address-of operator?", options: ["*", "%", "@", "&"], correct: 3 },
                    { q: "Dynamic allocation?", options: ["malloc()", "create()", "alloc()", "new()"], correct: 0 },
                    { q: "Header for math?", options: ["stdio.h", "math.h", "conio.h", "stdlib.h"], correct: 1 },
                    { q: "Static var default?", options: ["0", "Garbage", "-1", "1"], correct: 0 },
                    { q: "Macro definition?", options: ["#def", "#macro", "#define", "#const"], correct: 2 },
                    { q: "Void is a?", options: ["Type", "Return type", "Value", "Pointer"], correct: 1 },
                    { q: "Exit-controlled loop?", options: ["for", "while", "do-while", "if"], correct: 2 },
                    { q: "Logical NOT?", options: ["~", "!", "!=", "||"], correct: 1 },
                    { q: "Indice starts at?", options: ["1", "0", "-1", "Any"], correct: 1 },
                    { q: "Modulus operator?", options: ["/", "*", "%", "^"], correct: 2 },

                    // --- Added 15 (to make 30) ---
                    { q: "Which is NOT a basic data type in C?", options: ["int", "float", "string", "char"], correct: 2 },
                    { q: "Which operator is used to access structure members via pointer?", options: [".", "->", "::", ":"], correct: 1 },
                    { q: "Which function is used to read a formatted input in C?", options: ["printf()", "scanf()", "gets()", "putchar()"], correct: 1 },
                    { q: "Which header is required for malloc()?", options: ["stdlib.h", "stdio.h", "math.h", "string.h"], correct: 0 },
                    { q: "Which loop checks condition at the beginning?", options: ["do-while", "while", "goto", "switch"], correct: 1 },
                    { q: "What does 'sizeof' return?", options: ["Size in bytes", "Size in bits", "Address", "Value"], correct: 0 },
                    { q: "Which keyword is used to define a constant in C (common way)?", options: ["final", "const", "constant", "immutable"], correct: 1 },
                    { q: "Which is correct for array declaration?", options: ["int a(10);", "int a[10];", "int[10] a;", "array int a[10];"], correct: 1 },
                    { q: "Which function compares two strings?", options: ["strcat()", "strcmp()", "strcpy()", "strlen()"], correct: 1 },
                    { q: "What is the index of the first element in C arrays?", options: ["1", "0", "-1", "Depends"], correct: 1 },
                    { q: "Which operator is used for bitwise AND?", options: ["&&", "&", "|", "^"], correct: 1 },
                    { q: "Which storage class makes a variable visible across files?", options: ["static", "extern", "register", "auto"], correct: 1 },
                    { q: "What is returned by main() typically?", options: ["char", "int", "float", "void only"], correct: 1 },
                    { q: "Which is used to free dynamically allocated memory?", options: ["delete", "remove", "free", "dispose"], correct: 2 },
                    { q: "Which statement can replace multiple if-else checks for fixed values?", options: ["switch", "for", "break", "continue"], correct: 0 }
                ]
            },

            java: {
                title: "Java",
                questions: [
                    // --- Existing 15 ---
                    { q: "Who invented Java?", options: ["Gosling", "Stroustrup", "Guido", "Ritchie"], correct: 0 },
                    { q: "Primitive type?", options: ["String", "int", "Array", "Map"], correct: 1 },
                    { q: "Inheritance keyword?", options: ["extends", "implements", "inherits", "using"], correct: 0 },
                    { q: "JVM full form?", options: ["Java Virtual Machine", "Visual Machine", "View Manager", "None"], correct: 0 },
                    { q: "Superclass of all?", options: ["Main", "Root", "Object", "Base"], correct: 2 },
                    { q: "Bytecode extension?", options: [".java", ".class", ".exe", ".jar"], correct: 1 },
                    { q: "Access to private?", options: ["Anywhere", "Subclass", "Same class", "Package"], correct: 2 },
                    { q: "Interface uses?", options: ["implements", "extends", "inherits", "using"], correct: 0 },
                    { q: "Java compiler name?", options: ["javac", "java", "jre", "jdk"], correct: 0 },
                    { q: "Main method argument?", options: ["String[]", "int[]", "void", "None"], correct: 0 },
                    { q: "Is Java platform independent?", options: ["Yes", "No", "Depends", "Only web"], correct: 0 },
                    { q: "Static belongs to?", options: ["Instance", "Class", "Method", "Variable"], correct: 1 },
                    { q: "Try-catch purpose?", options: ["Loops", "Exceptions", "Threads", "Security"], correct: 1 },
                    { q: "Constructor return type?", options: ["void", "int", "None", "Class"], correct: 2 },
                    { q: "Immutable class?", options: ["String", "StringBuilder", "ArrayList", "Vector"], correct: 0 },

                    // --- Added 15 (to make 30) ---
                    { q: "Which is NOT an OOP concept?", options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"], correct: 2 },
                    { q: "Which keyword prevents inheritance?", options: ["final", "static", "private", "protected"], correct: 0 },
                    { q: "Which collection does NOT allow duplicates?", options: ["List", "Set", "ArrayList", "Vector"], correct: 1 },
                    { q: "Which keyword is used to create an object?", options: ["create", "new", "alloc", "make"], correct: 1 },
                    { q: "Which is a checked exception?", options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IOException", "ArithmeticException"], correct: 2 },
                    { q: "Which method is entry point of Java program?", options: ["start()", "run()", "main()", "init()"], correct: 2 },
                    { q: "Which access modifier is most restrictive?", options: ["public", "protected", "default", "private"], correct: 3 },
                    { q: "Which keyword refers to current object?", options: ["this", "self", "current", "super"], correct: 0 },
                    { q: "Which is used to inherit an interface?", options: ["extends", "implements", "inherits", "with"], correct: 0 },
                    { q: "What does JDK include?", options: ["Only JRE", "Only JVM", "JRE + tools", "Only compiler"], correct: 2 },
                    { q: "Which class is used for taking input from console (common)?", options: ["Scanner", "ConsoleReader", "Input", "Reader"], correct: 0 },
                    { q: "Which is NOT a primitive type?", options: ["byte", "short", "String", "boolean"], correct: 2 },
                    { q: "Which operator compares object references?", options: ["equals()", "==", "compareTo()", "is"], correct: 1 },
                    { q: "Which method is used to start a thread?", options: ["run()", "execute()", "start()", "begin()"], correct: 2 },
                    { q: "Which package contains ArrayList?", options: ["java.io", "java.util", "java.net", "java.lang.reflect"], correct: 1 }
                ]
            },

            python: {
                title: "Python",
                questions: [
                    // --- Existing 15 ---
                    { q: "Who developed Python?", options: ["van Rossum", "Zuckerberg", "Gates", "Page"], correct: 0 },
                    { q: "Comment symbol?", options: ["#", "//", "'''", "/*"], correct: 0 },
                    { q: "Function keyword?", options: ["func", "def", "lambda", "define"], correct: 1 },
                    { q: "Empty value?", options: ["null", "nil", "None", "empty"], correct: 2 },
                    { q: "3 // 2 result?", options: ["1.5", "1", "2", "0.5"], correct: 1 },
                    { q: "List vs Tuple?", options: ["Mutable/Immutable", "Size", "Type", "None"], correct: 0 },
                    { q: "PIP is for?", options: ["Packages", "Compiling", "Encryption", "Debug"], correct: 0 },
                    { q: "Indentation matters?", options: ["Yes", "No", "Optional", "Sometimes"], correct: 0 },
                    { q: "Boolean type?", options: ["bool", "boolean", "logical", "Bit"], correct: 0 },
                    { q: "Exponent operator?", options: ["^", "**", "&&", "exp"], correct: 1 },
                    { q: "Length function?", options: ["size()", "count()", "len()", "length()"], correct: 2 },
                    { q: "Is Python case-sensitive?", options: ["Yes", "No", "Maybe", "Some OS"], correct: 0 },
                    { q: "Dictionary symbol?", options: ["[]", "()", "{}", "<>"], correct: 2 },
                    { q: "Range(5) generates?", options: ["0,1,2,3,4,5", "1-5", "0-4", "None"], correct: 2 },
                    { q: "Slice syntax?", options: ["x[1:5]", "x(1-5)", "x{1:5}", "x|1-5|"], correct: 0 },

                    // --- Added 15 (to make 30) ---
                    { q: "Which is used to define a class in Python?", options: ["class", "struct", "define", "object"], correct: 0 },
                    { q: "Which function converts string to integer?", options: ["str()", "int()", "float()", "eval()"], correct: 1 },
                    { q: "Which keyword handles exceptions?", options: ["try", "catch", "except", "finally"], correct: 0 },
                    { q: "Correct file extension for Python?", options: [".java", ".py", ".js", ".cpp"], correct: 1 },
                    { q: "What does 'len([1,2,3])' return?", options: ["1", "2", "3", "Error"], correct: 2 },
                    { q: "Which creates an empty list?", options: ["{}", "[]", "()", "None"], correct: 1 },
                    { q: "Which creates a tuple?", options: ["[1,2]", "(1,2)", "{1,2}", "<1,2>"], correct: 1 },
                    { q: "Which is a Python boolean literal?", options: ["true", "false", "True", "FALSE"], correct: 2 },
                    { q: "Which keyword is used for anonymous functions?", options: ["anon", "lambda", "def", "func"], correct: 1 },
                    { q: "What does 'type(3.0)' return?", options: ["int", "float", "double", "decimal"], correct: 1 },
                    { q: "Which method adds item to end of list?", options: ["add()", "append()", "push()", "insertEnd()"], correct: 1 },
                    { q: "Which keyword is used to import a module?", options: ["include", "require", "import", "using"], correct: 2 },
                    { q: "Which operator checks membership?", options: ["in", "has", "contains", "is"], correct: 0 },
                    { q: "Which creates a set?", options: ["{}", "set()", "[]", "()"], correct: 1 },
                    { q: "Which statement exits a loop?", options: ["stop", "exit", "break", "end"], correct: 2 }
                ]
            },

            javascript: {
                title: "JavaScript",
                questions: [
                    { q: "JavaScript runs primarily in:", options: ["Compiler", "Browser/Runtime", "Database", "OS Kernel"], correct: 1 },
                    { q: "Which keyword declares a block-scoped variable?", options: ["var", "let", "define", "static"], correct: 1 },
                    { q: "Which keyword declares a constant?", options: ["const", "final", "fixed", "constant"], correct: 0 },
                    { q: "Type of NaN is:", options: ["string", "number", "object", "undefined"], correct: 1 },
                    { q: "Which is NOT a primitive type in JS?", options: ["number", "boolean", "object", "string"], correct: 2 },
                    { q: "=== checks:", options: ["value only", "type only", "value and type", "reference only"], correct: 2 },
                    { q: "Which method converts JSON string to object?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "parseJSON()"], correct: 0 },
                    { q: "Which method converts object to JSON string?", options: ["JSON.parse()", "JSON.stringify()", "toString()", "encode()"], correct: 1 },
                    { q: "Array method to add at end:", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
                    { q: "Array method to remove from end:", options: ["push()", "pop()", "shift()", "unshift()"], correct: 1 },
                    { q: "What does 'typeof null' return?", options: ["null", "object", "undefined", "number"], correct: 1 },
                    { q: "Promise states include:", options: ["start, stop", "pending, fulfilled, rejected", "init, done", "wait, run"], correct: 1 },
                    { q: "Which keyword handles errors in try block?", options: ["catch", "except", "handle", "error"], correct: 0 },
                    { q: "Function to schedule code later:", options: ["setTimeout", "delay", "waitFor", "timer"], correct: 0 },
                    { q: "DOM stands for:", options: ["Data Object Model", "Document Object Model", "Dynamic Object Model", "Document Output Mode"], correct: 1 },

                    { q: "Which loop is best for arrays (indexes)?", options: ["for", "switch", "try", "class"], correct: 0 },
                    { q: "Which creates a new array by mapping?", options: ["map()", "forEach()", "filter()", "reduce()"], correct: 0 },
                    { q: "Which creates a filtered array?", options: ["map()", "forEach()", "filter()", "reduce()"], correct: 2 },
                    { q: "Which reduces array to single value?", options: ["map()", "filter()", "reduce()", "join()"], correct: 2 },
                    { q: "Which operator is used for optional chaining?", options: ["?.", "::", "??", "=>"], correct: 0 },
                    { q: "Nullish coalescing operator is:", options: ["||", "&&", "??", "!!"], correct: 2 },
                    { q: "Which declares an async function result type?", options: ["async returns Promise", "async returns number", "async returns void only", "async returns string"], correct: 0 },
                    { q: "Local storage persists:", options: ["Until tab closes", "Until cleared", "Only 1 minute", "Only session"], correct: 1 },
                    { q: "Session storage persists:", options: ["Forever", "Until cleared", "Until tab closes", "Across devices"], correct: 2 },
                    { q: "Which is used to export from module?", options: ["export", "send", "emit", "moduleout"], correct: 0 },
                    { q: "Which is used to import default export?", options: ["import X from 'm'", "require('m')", "include m", "using m"], correct: 0 },
                    { q: "Which creates an object literal?", options: ["[]", "{}", "()", "<>"], correct: 1 },
                    { q: "Which method joins array into string?", options: ["concat()", "join()", "merge()", "stringify()"], correct: 1 },
                    { q: "Event loop is related to:", options: ["Memory allocation", "Async execution", "CPU scheduling", "Disk IO only"], correct: 1 }
                ]
            },

            sql: {
                title: "SQL Basics",
                questions: [
                    { q: "SQL stands for:", options: ["Structured Query Language", "Simple Query Language", "Standard Quick Language", "None"], correct: 0 },
                    { q: "Command to read data:", options: ["GET", "SELECT", "FETCHALL", "READ"], correct: 1 },
                    { q: "Clause to filter rows:", options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"], correct: 0 },
                    { q: "Which removes duplicates?", options: ["DISTINCT", "UNIQUE", "ONLY", "NODUP"], correct: 0 },
                    { q: "Sort results using:", options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE"], correct: 1 },
                    { q: "Aggregate function:", options: ["SUM()", "ADD()", "TOTAL()", "MERGE()"], correct: 0 },
                    { q: "COUNT(*) returns:", options: ["Sum", "Rows count", "Max", "Min"], correct: 1 },
                    { q: "Primary key must be:", options: ["Nullable", "Unique & Not Null", "Duplicate", "Optional"], correct: 1 },
                    { q: "FOREIGN KEY used for:", options: ["Sorting", "Linking tables", "Deleting DB", "Creating index"], correct: 1 },
                    { q: "JOIN combines:", options: ["Files", "Tables", "Networks", "Loops"], correct: 1 },
                    { q: "INNER JOIN returns:", options: ["All rows", "Matching rows", "Only left", "Only right"], correct: 1 },
                    { q: "LEFT JOIN returns:", options: ["Only matching", "All left + matching right", "All right + matching left", "No matches"], correct: 1 },
                    { q: "GROUP BY is used with:", options: ["Filtering only", "Aggregation", "Deletion", "Indexing"], correct: 1 },
                    { q: "HAVING filters:", options: ["Columns", "Aggregated groups", "Tables", "Indexes"], correct: 1 },
                    { q: "INSERT is used to:", options: ["Update", "Delete", "Add rows", "Create DB"], correct: 2 },

                    { q: "UPDATE modifies:", options: ["Rows", "Indexes", "Schemas only", "Connections"], correct: 0 },
                    { q: "DELETE removes:", options: ["Columns", "Rows", "Database engine", "Constraints"], correct: 1 },
                    { q: "TRUNCATE does:", options: ["Delete selected rows", "Remove all rows fast", "Update rows", "Rename table"], correct: 1 },
                    { q: "ALTER is used to:", options: ["Change table structure", "Select rows", "Insert rows", "Group rows"], correct: 0 },
                    { q: "CREATE TABLE creates:", options: ["Rows", "Table", "View only", "Index only"], correct: 1 },
                    { q: "DROP TABLE does:", options: ["Remove rows", "Remove table", "Remove column values", "Freeze table"], correct: 1 },
                    { q: "A VIEW is:", options: ["Physical table", "Virtual table", "Index", "Trigger"], correct: 1 },
                    { q: "Index mainly improves:", options: ["Storage", "Read performance", "Network speed", "RAM size"], correct: 1 },
                    { q: "Which is a constraint?", options: ["WHERE", "NOT NULL", "ORDER BY", "GROUP BY"], correct: 1 },
                    { q: "BETWEEN is:", options: ["Join type", "Range filter", "Aggregate", "DDL"], correct: 1 },
                    { q: "LIKE is used for:", options: ["Math", "Pattern matching", "Sorting", "Joining"], correct: 1 },
                    { q: "IN is used for:", options: ["List match", "Sorting", "Grouping", "Counting"], correct: 0 },
                    { q: "NULL means:", options: ["0", "Empty string", "Unknown/No value", "False"], correct: 2 },
                    { q: "COMMIT does:", options: ["Undo", "Save transaction", "Delete DB", "Close server"], correct: 1 },
                    { q: "ROLLBACK does:", options: ["Undo transaction", "Save transaction", "Create table", "Sort table"], correct: 0 }
                ]
            }
        }
    },

    dsa: {
        title: "Data Structures",
        icon: "fas fa-sitemap",
        desc: "Arrays, Linked Lists, Stacks, Queues and Trees.",
        subcategories: {
            arrays: {
                title: "Arrays",
                questions: [
                    // --- Existing 15 ---
                    { q: "Array indices start at:", options: ["1", "-1", "0", "Any"], correct: 2 },
                    { q: "Time complexity for access?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
                    { q: "Dynamic array resizing?", options: ["Yes", "No", "Fixed", "None"], correct: 0 },
                    { q: "Sparse matrix has many?", options: ["Ones", "Zeros", "Primes", "Floats"], correct: 1 },
                    { q: "Fixed size array?", options: ["Static", "Dynamic", "Global", "Local"], correct: 0 },
                    { q: "2D array is?", options: ["Matrix", "Vector", "List", "Tree"], correct: 0 },
                    { q: "Binary search needs?", options: ["Sorted", "Unsorted", "List", "Tree"], correct: 0 },
                    { q: "Binary search complexity?", options: ["O(1)", "O(n)", "O(log n)", "O(n!)"], correct: 2 },
                    { q: "Array stores same types?", options: ["Yes", "No", "Sometimes", "Never"], correct: 0 },
                    { q: "Sizeof empty array?", options: ["0", "1", "Error", "Pointer"], correct: 0 },
                    { q: "Linear search complexity?", options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], correct: 0 },
                    { q: "Array element address?", options: ["Base + index*size", "Base + size", "Random", "Fixed"], correct: 0 },
                    { q: "Multi-dimensional array?", options: ["Yes", "No", "Only 2D", "Only 1D"], correct: 0 },
                    { q: "Delete from unsorted array?", options: ["O(1)", "O(n)", "O(log n)", "O(1)"], correct: 1 },
                    { q: "Array vs List traversal?", options: ["Array faster", "List faster", "Same", "None"], correct: 0 },

                    // --- Added 15 (to make 30) ---
                    { q: "Worst-case time for binary search?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 2 },
                    { q: "Best-case for linear search?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
                    { q: "Contiguous memory means:", options: ["Scattered", "Continuous block", "Disk-based", "Random"], correct: 1 },
                    { q: "Array rotation is:", options: ["Sorting", "Shifting elements", "Deleting", "Searching"], correct: 1 },
                    { q: "Two-pointer technique often used in:", options: ["Graphs", "Arrays", "Stacks", "OS"], correct: 1 },
                    { q: "Prefix sum helps in:", options: ["Fast range queries", "Slow searches", "Memory leaks", "Networking"], correct: 0 },
                    { q: "Kadane’s algorithm solves:", options: ["Max subarray sum", "Binary search", "Sorting", "DFS"], correct: 0 },
                    { q: "If array is sorted, duplicates can be removed in:", options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], correct: 0 },
                    { q: "Merging two sorted arrays is:", options: ["O(n+m)", "O(n*m)", "O(log n)", "O(1)"], correct: 0 },
                    { q: "Peak element can be found in:", options: ["O(n)", "O(log n)", "O(n^2)", "O(1) always"], correct: 1 },
                    { q: "Array element update time:", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 0 },
                    { q: "Array insertion at beginning cost:", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 1 },
                    { q: "In-place algorithm means:", options: ["Uses extra array", "Uses constant extra space", "Uses recursion only", "Uses disk"], correct: 1 },
                    { q: "Stable sorting means:", options: ["Fast", "Keeps relative order", "Uses no memory", "Never swaps"], correct: 1 },
                    { q: "Two-sum on sorted array often uses:", options: ["Hash only", "Two pointers", "DFS", "Heap"], correct: 1 }
                ]
            },

            linkedlist: {
                title: "Linked Lists",
                questions: [
                    { q: "Linked list nodes are stored:", options: ["Contiguously", "Randomly linked by pointers", "Only on disk", "In CPU"], correct: 1 },
                    { q: "Insertion at head in singly LL is:", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
                    { q: "Accessing k-th element in LL is:", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 1 },
                    { q: "Doubly LL has:", options: ["One pointer", "Two pointers", "No pointers", "Three pointers always"], correct: 1 },
                    { q: "Tail insertion in LL (with tail pointer) is:", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
                    { q: "Cycle detection can be done by:", options: ["Binary search", "Floyd’s algorithm", "Insertion sort", "DP"], correct: 1 },
                    { q: "Floyd’s algorithm uses:", options: ["Two pointers", "Three pointers", "Heap", "Stack"], correct: 0 },
                    { q: "Deleting a node (given pointer to node) in singly LL is:", options: ["O(1)", "O(n)", "O(log n)", "Impossible"], correct: 0 },
                    { q: "Reversing a LL iteratively is:", options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], correct: 0 },
                    { q: "Middle of LL can be found in:", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correct: 1 },
                    { q: "A circular linked list last node points to:", options: ["Null", "Head", "Tail", "Random"], correct: 1 },
                    { q: "LL is preferred over array when:", options: ["Random access needed", "Frequent insert/delete", "Need cache locality", "Need sorting"], correct: 1 },
                    { q: "In doubly LL, delete node given node pointer is:", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
                    { q: "Merging two sorted linked lists is:", options: ["O(n+m)", "O(n*m)", "O(log n)", "O(1)"], correct: 0 },
                    { q: "Detect cycle means:", options: ["Find duplicates", "Find loop", "Sort list", "Count nodes"], correct: 1 },

                    { q: "A node typically contains:", options: ["Only data", "Data + link(s)", "Only link", "Only index"], correct: 1 },
                    { q: "Singly LL node has:", options: ["prev only", "next only", "prev and next", "no link"], correct: 1 },
                    { q: "Space overhead in LL compared to array:", options: ["Less", "More (pointers)", "Same", "None"], correct: 1 },
                    { q: "Reverse a LL recursively uses:", options: ["Queue", "Call stack", "Heap only", "Matrix"], correct: 1 },
                    { q: "Remove Nth from end often uses:", options: ["Two pointers", "Binary tree", "DP", "Heap"], correct: 0 },
                    { q: "Intersection of two LLs can be found using:", options: ["Sorting", "Length alignment", "BFS", "Trie"], correct: 1 },
                    { q: "Palindrome LL check often uses:", options: ["Reverse half", "Heap", "Binary search", "Graph"], correct: 0 },
                    { q: "In circular LL, traversal ends when:", options: ["Null", "Back to head", "Size reached always", "Never"], correct: 1 },
                    { q: "Delete head in singly LL is:", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
                    { q: "Find length of LL is:", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 1 },
                    { q: "Concatenating two LLs with tail pointers is:", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
                    { q: "Split LL into two halves uses:", options: ["Slow/fast pointers", "Binary search", "Heap", "Matrix"], correct: 0 },
                    { q: "Merge sort on linked list is efficient because:", options: ["Random access", "Easy split/merge", "Needs arrays", "No pointers"], correct: 1 },
                    { q: "In doubly LL, backward traversal is possible because:", options: ["next pointer", "prev pointer", "index", "hash"], correct: 1 },
                    { q: "When is LL worst for performance?", options: ["Frequent inserts", "Frequent deletes", "Random access", "Unknown size"], correct: 2 }
                ]
            }
        }
    },

    networks: {
        title: "Networks",
        icon: "fas fa-network-wired",
        desc: "OSI, TCP/IP, and Web basics.",
        subcategories: {
            osi: {
                title: "OSI Model",
                questions: [
                    // --- Existing 15 ---
                    { q: "OSI Layers count?", options: ["5", "6", "7", "8"], correct: 2 },
                    { q: "Routing layer?", options: ["Network", "Transport", "Physical", "Pres"], correct: 0 },
                    { q: "Encryption layer?", options: ["Session", "App", "Presentation", "Data"], correct: 2 },
                    { q: "HTTP layer?", options: ["Network", "Transport", "App", "Pres"], correct: 2 },
                    { q: "MAC Address layer?", options: ["Network", "Data Link", "Physical", "Session"], correct: 1 },
                    { q: "Reliability layer?", options: ["Transport", "Network", "Data Link", "Physical"], correct: 0 },
                    { q: "Routers layer?", options: ["2", "3", "4", "7"], correct: 1 },
                    { q: "Switch layer?", options: ["1", "2", "3", "4"], correct: 1 },
                    { q: "Segments unit of?", options: ["Network", "Transport", "App", "Physical"], correct: 1 },
                    { q: "Error detection layer?", options: ["Physical", "Data Link", "Session", "App"], correct: 1 },
                    { q: "IP Protocol layer?", options: ["Network", "Transport", "Data Link", "Physical"], correct: 0 },
                    { q: "Physical unit?", options: ["Bits", "Frames", "Packets", "Segments"], correct: 0 },
                    { q: "Compression layer?", options: ["Pres", "Session", "Network", "App"], correct: 2 },
                    { q: "Who developed OSI?", options: ["IEEE", "ISO", "IETF", "ICANN"], correct: 1 },
                    { q: "Upper layers count?", options: ["3", "4", "2", "1"], correct: 0 },

                    // --- Added 15 (to make 30) ---
                    { q: "TCP works at which layer?", options: ["Network", "Transport", "Session", "Physical"], correct: 1 },
                    { q: "UDP works at which layer?", options: ["Transport", "Data Link", "Presentation", "Physical"], correct: 0 },
                    { q: "Port numbers are used at:", options: ["Network", "Transport", "Physical", "Data Link"], correct: 1 },
                    { q: "IP address is used at:", options: ["Network", "Transport", "Session", "Physical"], correct: 0 },
                    { q: "ARP maps:", options: ["IP to MAC", "MAC to IP", "Port to IP", "IP to DNS"], correct: 0 },
                    { q: "DNS mainly works at:", options: ["Application", "Network", "Transport", "Physical"], correct: 0 },
                    { q: "Presentation layer deals with:", options: ["Routing", "Encoding/Encryption", "Bits transfer", "Switching"], correct: 1 },
                    { q: "Session layer handles:", options: ["Connections/session control", "Frames", "Packets", "Cables"], correct: 0 },
                    { q: "Data Link layer unit is:", options: ["Bit", "Frame", "Packet", "Segment"], correct: 1 },
                    { q: "Network layer unit is:", options: ["Frame", "Packet", "Bit", "Message"], correct: 1 },
                    { q: "Transport layer unit is:", options: ["Packet", "Frame", "Segment", "Bit"], correct: 2 },
                    { q: "Application layer provides:", options: ["End-user services", "Routing", "Switching", "Signal"], correct: 0 },
                    { q: "OSI model helps in:", options: ["Standardization", "Hardware only", "Coding only", "Games"], correct: 0 },
                    { q: "Which device works at Layer 1?", options: ["Switch", "Hub", "Router", "Gateway"], correct: 1 },
                    { q: "Which device works at Layer 7?", options: ["Gateway/Proxy", "Hub", "Repeater", "NIC"], correct: 0 }
                ]
            },

            tcpip: {
                title: "TCP/IP Basics",
                questions: [
                    { q: "TCP is:", options: ["Connectionless", "Connection-oriented", "Physical", "Routing"], correct: 1 },
                    { q: "UDP is:", options: ["Connectionless", "Connection-oriented", "Encrypted", "Reliable"], correct: 0 },
                    { q: "HTTP default port:", options: ["21", "80", "443", "25"], correct: 1 },
                    { q: "HTTPS default port:", options: ["110", "80", "443", "53"], correct: 2 },
                    { q: "DNS default port:", options: ["53", "67", "8080", "22"], correct: 0 },
                    { q: "SSH default port:", options: ["20", "22", "23", "25"], correct: 1 },
                    { q: "Ping uses:", options: ["TCP", "ICMP", "UDP", "ARP"], correct: 1 },
                    { q: "IPV4 size:", options: ["32-bit", "64-bit", "128-bit", "16-bit"], correct: 0 },
                    { q: "IPV6 size:", options: ["32-bit", "64-bit", "128-bit", "16-bit"], correct: 2 },
                    { q: "Three-way handshake is for:", options: ["UDP", "TCP", "HTTP", "DNS"], correct: 1 },
                    { q: "NAT is used to:", options: ["Encrypt data", "Translate private/public IP", "Compress files", "Boost CPU"], correct: 1 },
                    { q: "Subnet mask is used for:", options: ["Routing", "Network/host split", "Encryption", "Ports"], correct: 1 },
                    { q: "Default gateway is:", options: ["Switch", "Router", "Hub", "Firewall only"], correct: 1 },
                    { q: "Traceroute shows:", options: ["CPU load", "Hop path", "RAM usage", "Disk usage"], correct: 1 },
                    { q: "TCP provides reliability using:", options: ["No ACK", "ACK & retransmission", "Broadcast only", "ARP"], correct: 1 },

                    { q: "HTTP is:", options: ["Stateful", "Stateless", "Layer 2", "Layer 1"], correct: 1 },
                    { q: "TLS is used in:", options: ["HTTP", "HTTPS", "FTP", "SMTP only"], correct: 1 },
                    { q: "A public IP is:", options: ["Routable on internet", "Local only", "Loopback", "MAC"], correct: 0 },
                    { q: "Loopback IP is:", options: ["0.0.0.0", "127.0.0.1", "255.255.255.255", "1.1.1.1"], correct: 1 },
                    { q: "0.0.0.0 means:", options: ["Broadcast", "Default/unspecified", "Loopback", "Multicast"], correct: 1 },
                    { q: "255.255.255.255 is:", options: ["Loopback", "Broadcast", "Gateway", "DNS"], correct: 1 },
                    { q: "MAC address is:", options: ["Layer 2 identifier", "Layer 7 name", "Port number", "IP"], correct: 0 },
                    { q: "DHCP assigns:", options: ["MAC", "IP automatically", "Passwords", "DNS zones only"], correct: 1 },
                    { q: "FTP default port:", options: ["21", "80", "443", "22"], correct: 0 },
                    { q: "SMTP default port:", options: ["25", "53", "110", "143"], correct: 0 },
                    { q: "IMAP default port:", options: ["143", "25", "53", "21"], correct: 0 },
                    { q: "POP3 default port:", options: ["110", "143", "25", "22"], correct: 0 },
                    { q: "MTU relates to:", options: ["Max packet size", "Min latency", "CPU speed", "Port range"], correct: 0 },
                    { q: "Fragmentation happens when:", options: ["Packet > MTU", "No DNS", "Low CPU", "No ARP"], correct: 0 },
                    { q: "TCP window is used for:", options: ["Flow control", "Routing", "Encryption", "Switching"], correct: 0 }
                ]
            }
        }
    },

    os: {
        title: "Operating Systems",
        icon: "fas fa-desktop",
        desc: "Processes, CPU scheduling, and memory.",
        subcategories: {
            process: {
                title: "Process Mgmt",
                questions: [
                    // --- Existing 15 ---
                    { q: "Program in execution?", options: ["Thread", "Process", "Task", "Code"], correct: 1 },
                    { q: "FCFS meaning?", options: ["Fast Cycle", "First Come First Served", "Fixed", "None"], correct: 1 },
                    { q: "Round Robin uses?", options: ["Priority", "Time Quantum", "SJF", "Waiting"], correct: 1 },
                    { q: "PCB stands for?", options: ["Process Control Block", "Printer", "Personal", "None"], correct: 0 },
                    { q: "Fork() creates?", options: ["Thread", "Child process", "Pipe", "Address"], correct: 1 },
                    { q: "Starvation in SJF?", options: ["Yes", "No", "Depends", "Never"], correct: 0 },
                    { q: "Mutex stands for?", options: ["Mutual Extension", "Mutual Exclusion", "Multi", "None"], correct: 1 },
                    { q: "Context switch is?", options: ["Overhead", "Benefit", "Fast", "Storage"], correct: 0 },
                    { q: "LWP stands for?", options: ["Light Weight Process", "Long Wait", "Local", "None"], correct: 0 },
                    { q: "Deadlock avoidance?", options: ["Banker's", "Dekker's", "Peterson's", "All"], correct: 0 },
                    { q: "Thrashing cause?", options: ["High multitasking", "Page faults", "Low RAM", "All"], correct: 3 },
                    { q: "TAT is?", options: ["Exit - Arrival", "Wait + Burst", "Both", "None"], correct: 2 },
                    { q: "Shell is?", options: ["Kernel", "Interpreter", "Hardware", "Compiler"], correct: 1 },
                    { q: "Demand paging?", options: ["Load on use", "Load all", "Load never", "Swap"], correct: 0 },
                    { q: "Semaphore value 0 or 1?", options: ["Binary", "Counting", "Wait", "Signal"], correct: 0 },

                    // --- Added 15 (to make 30) ---
                    { q: "A thread is:", options: ["Heavyweight process", "Lightweight process", "Kernel only", "Disk unit"], correct: 1 },
                    { q: "CPU scheduling selects:", options: ["Memory pages", "Next process", "Disk blocks", "Network packets"], correct: 1 },
                    { q: "SJF stands for:", options: ["Shortest Job First", "Simple Job First", "System Job First", "None"], correct: 0 },
                    { q: "Preemptive scheduling means:", options: ["No interruption", "Can interrupt running process", "Only FCFS", "Only SJF"], correct: 1 },
                    { q: "Starvation occurs in:", options: ["Priority scheduling", "FCFS only", "Round robin never", "None"], correct: 0 },
                    { q: "Deadlock requires:", options: ["No resources", "Four conditions", "Only CPU", "Only RAM"], correct: 1 },
                    { q: "Mutual exclusion means:", options: ["No sharing", "Only one in critical section", "All share", "No CPU"], correct: 1 },
                    { q: "Critical section problem relates to:", options: ["Memory", "Synchronization", "Networking", "IO only"], correct: 1 },
                    { q: "IPC stands for:", options: ["Inter Process Communication", "Internet Protocol Control", "Internal Process Call", "None"], correct: 0 },
                    { q: "System call is:", options: ["User function", "Kernel interface", "Compiler feature", "Hardware only"], correct: 1 },
                    { q: "Process state NOT common:", options: ["Ready", "Running", "Blocked", "Compiled"], correct: 3 },
                    { q: "Paging avoids:", options: ["Fragmentation completely", "External fragmentation", "CPU scheduling", "Deadlock"], correct: 1 },
                    { q: "Virtual memory allows:", options: ["More RAM", "Use disk as memory", "Faster CPU", "No OS"], correct: 1 },
                    { q: "Context switch saves/restores:", options: ["Only RAM", "CPU registers/process state", "Hard disk", "BIOS"], correct: 1 },
                    { q: "Time quantum is used in:", options: ["FCFS", "Round Robin", "SJF", "Banker’s"], correct: 1 }
                ]
            },

            memory: {
                title: "Memory Mgmt",
                questions: [
                    { q: "Internal fragmentation occurs in:", options: ["Paging", "Segmentation", "Both", "Neither"], correct: 0 },
                    { q: "External fragmentation occurs in:", options: ["Paging", "Segmentation", "Both", "Neither"], correct: 1 },
                    { q: "Page size is:", options: ["Fixed", "Always variable", "Only 1KB", "Depends on CPU speed"], correct: 0 },
                    { q: "A page table stores:", options: ["File names", "Frame mapping", "Ports", "Processes only"], correct: 1 },
                    { q: "TLB is:", options: ["Cache for page table", "Disk controller", "CPU scheduler", "Network buffer"], correct: 0 },
                    { q: "Page fault happens when:", options: ["Page in RAM", "Page not in RAM", "CPU idle", "Disk full"], correct: 1 },
                    { q: "Belady’s anomaly relates to:", options: ["Deadlocks", "Page replacement", "Scheduling", "Threads"], correct: 1 },
                    { q: "LRU is:", options: ["Least Recently Used", "Last Random Used", "Least Required Unit", "None"], correct: 0 },
                    { q: "FIFO page replacement evicts:", options: ["Newest", "Oldest", "Random", "Largest"], correct: 1 },
                    { q: "Thrashing means:", options: ["Too many page faults", "Fast CPU", "No IO", "No memory"], correct: 0 },
                    { q: "Segmentation uses:", options: ["Fixed blocks", "Logical segments", "Only pages", "Only frames"], correct: 1 },
                    { q: "Frame is a:", options: ["Disk block", "Physical memory unit", "CPU register", "Network unit"], correct: 1 },
                    { q: "Page is a:", options: ["Physical memory unit", "Logical memory unit", "CPU unit", "IO unit"], correct: 1 },
                    { q: "Working set model helps control:", options: ["Deadlock", "Thrashing", "Scheduling", "Compilation"], correct: 1 },
                    { q: "Demand paging loads:", options: ["All pages", "Only required pages", "No pages", "Only code"], correct: 1 },

                    { q: "Best fit is a:", options: ["CPU scheduling", "Memory allocation strategy", "Disk scheduling", "Network protocol"], correct: 1 },
                    { q: "First fit chooses:", options: ["Smallest hole", "First sufficient hole", "Largest hole", "Random hole"], correct: 1 },
                    { q: "Worst fit chooses:", options: ["Largest hole", "Smallest hole", "First hole", "No hole"], correct: 0 },
                    { q: "Compaction is used to reduce:", options: ["Internal fragmentation", "External fragmentation", "CPU usage", "Disk IO"], correct: 1 },
                    { q: "Virtual address translated using:", options: ["Compiler only", "MMU", "Router", "Switch"], correct: 1 },
                    { q: "Paging eliminates:", options: ["External fragmentation", "Internal fragmentation", "Both", "Neither"], correct: 0 },
                    { q: "Segmentation eliminates:", options: ["External fragmentation", "Internal fragmentation", "Both", "Neither"], correct: 1 },
                    { q: "Page replacement is needed when:", options: ["RAM empty", "RAM full and page fault", "CPU idle", "Disk empty"], correct: 1 },
                    { q: "Optimal replacement replaces page:", options: ["Used farthest in future", "Used recently", "Oldest", "Random"], correct: 0 },
                    { q: "Local replacement means:", options: ["Any process frame", "Same process frames", "Disk only", "Network only"], correct: 1 },
                    { q: "Global replacement means:", options: ["Same process only", "Any process frames", "CPU only", "TLB only"], correct: 1 },
                    { q: "Page table base register is:", options: ["PTBR", "PCBR", "TLBR", "MMBR"], correct: 0 },
                    { q: "Inverted page table reduces:", options: ["CPU", "Memory for page tables", "Disk", "Threads"], correct: 1 },
                    { q: "Swap space is on:", options: ["RAM", "Disk", "Cache", "CPU"], correct: 1 }
                ]
            }
        }
    },

    dbms: {
        title: "DBMS",
        icon: "fas fa-database",
        desc: "Keys, normalization, transactions, and indexing.",
        subcategories: {
            normalization: {
                title: "Normalization",
                questions: [
                    { q: "1NF requires:", options: ["No duplicates", "Atomic values", "No nulls", "Only keys"], correct: 1 },
                    { q: "2NF removes:", options: ["Transitive dependency", "Partial dependency", "All dependencies", "Keys"], correct: 1 },
                    { q: "3NF removes:", options: ["Partial dependency", "Transitive dependency", "All redundancy", "Joins"], correct: 1 },
                    { q: "BCNF is stronger than:", options: ["1NF", "2NF", "3NF", "None"], correct: 2 },
                    { q: "Candidate key is:", options: ["Any column", "Minimal superkey", "Foreign key", "Index"], correct: 1 },
                    { q: "Super key is:", options: ["Unique identifier set", "Non-unique", "Only primary", "Only foreign"], correct: 0 },
                    { q: "Primary key is:", options: ["One chosen candidate key", "Any key", "Always composite", "Nullable"], correct: 0 },
                    { q: "Foreign key ensures:", options: ["Uniqueness", "Referential integrity", "Sorting", "Encryption"], correct: 1 },
                    { q: "Functional dependency means:", options: ["A -> B", "B -> A only", "No relation", "Random"], correct: 0 },
                    { q: "Transitive dependency example:", options: ["A->B and B->C", "A->B only", "B->A only", "None"], correct: 0 },
                    { q: "Normalization mainly reduces:", options: ["CPU", "Data redundancy", "Network", "UI"], correct: 1 },
                    { q: "Denormalization is used to:", options: ["Reduce joins", "Increase redundancy", "Slow reads", "Remove indexes"], correct: 0 },
                    { q: "Lossless decomposition means:", options: ["No info lost", "Some rows lost", "Keys removed", "No joins possible"], correct: 0 },
                    { q: "Dependency preservation means:", options: ["All FDs still enforceable", "No keys", "No joins", "Only indexes"], correct: 0 },
                    { q: "A composite key is:", options: ["Single attribute key", "Multiple attributes key", "Foreign key", "Null key"], correct: 1 },

                    { q: "Anomalies include:", options: ["Insert/update/delete", "Only insert", "Only delete", "None"], correct: 0 },
                    { q: "Update anomaly means:", options: ["Duplicate updates needed", "No updates", "Wrong index", "No key"], correct: 0 },
                    { q: "Insert anomaly means:", options: ["Cannot insert without extra data", "Insert always works", "No keys", "No joins"], correct: 0 },
                    { q: "Delete anomaly means:", options: ["Deleting removes extra info", "Cannot delete", "Deletes only index", "None"], correct: 0 },
                    { q: "In BCNF, every determinant is:", options: ["Non-key", "Superkey", "Foreign key", "Index"], correct: 1 },
                    { q: "3NF allows:", options: ["Some redundancy", "No redundancy", "No keys", "No FDs"], correct: 0 },
                    { q: "Normalization increases:", options: ["Redundancy", "Consistency", "Duplication", "Anomalies"], correct: 1 },
                    { q: "Too much normalization can increase:", options: ["Joins", "Disk speed", "CPU cores", "IP"], correct: 0 },
                    { q: "A relation in DBMS is:", options: ["Table", "Index", "View only", "Trigger"], correct: 0 },
                    { q: "Attribute means:", options: ["Row", "Column", "Table", "Database"], correct: 1 },
                    { q: "Tuple means:", options: ["Column", "Row", "Key", "Schema"], correct: 1 },
                    { q: "Schema is:", options: ["Data itself", "Structure/definition", "Only rows", "Only columns"], correct: 1 },
                    { q: "Entity integrity ensures:", options: ["PK not null", "FK valid", "Index exists", "No joins"], correct: 0 },
                    { q: "Referential integrity ensures:", options: ["PK unique", "FK references valid PK", "No duplicates", "No nulls"], correct: 1 }
                ]
            }
        }
    },

    oops: {
        title: "OOP Concepts",
        icon: "fas fa-cubes",
        desc: "Core OOP interview questions for CS.",
        subcategories: {
            concepts: {
                title: "OOP Basics",
                questions: [
                    { q: "Encapsulation means:", options: ["Hiding data using access control", "Multiple inheritance", "Overloading only", "No classes"], correct: 0 },
                    { q: "Inheritance means:", options: ["Reusing properties/behavior", "Hiding data", "No objects", "Only interfaces"], correct: 0 },
                    { q: "Polymorphism means:", options: ["Many forms", "One form", "No forms", "Only variables"], correct: 0 },
                    { q: "Abstraction means:", options: ["Show essential, hide details", "Show everything", "No classes", "No methods"], correct: 0 },
                    { q: "Method overloading is:", options: ["Same name diff params", "Same name same params", "Only in C", "Not possible"], correct: 0 },
                    { q: "Method overriding is:", options: ["Child redefines parent method", "Same class methods", "No inheritance needed", "Only static"], correct: 0 },
                    { q: "An object is:", options: ["Instance of class", "Blueprint", "Interface", "Compiler"], correct: 0 },
                    { q: "A class is:", options: ["Blueprint", "Instance", "Variable", "Library"], correct: 0 },
                    { q: "Association is:", options: ["Relationship between objects", "A loop", "A compiler", "A variable"], correct: 0 },
                    { q: "Aggregation is:", options: ["Weak has-a", "Strong has-a", "is-a", "no relation"], correct: 0 },
                    { q: "Composition is:", options: ["Strong has-a", "Weak has-a", "is-a", "none"], correct: 0 },
                    { q: "is-a relationship indicates:", options: ["Inheritance", "Composition", "Aggregation", "Encapsulation"], correct: 0 },
                    { q: "has-a relationship indicates:", options: ["Association/Composition/Aggregation", "Only inheritance", "No relation", "Overloading"], correct: 0 },
                    { q: "Constructor is:", options: ["Special method to init object", "Destructor", "Loop", "Keyword"], correct: 0 },
                    { q: "Destructor is used to:", options: ["Free resources", "Create object", "Sort array", "Compile code"], correct: 0 },

                    { q: "Interface provides:", options: ["Contract of methods", "Object data", "DB connection", "OS scheduling"], correct: 0 },
                    { q: "Abstract class can have:", options: ["Abstract + concrete methods", "Only concrete", "Only abstract", "No methods"], correct: 0 },
                    { q: "Static binding occurs in:", options: ["Compile time", "Run time", "Network time", "DB time"], correct: 0 },
                    { q: "Dynamic binding occurs in:", options: ["Compile time", "Run time", "Link time", "Boot time"], correct: 1 },
                    { q: "Access modifiers control:", options: ["Visibility", "Compilation speed", "Network speed", "Disk IO"], correct: 0 },
                    { q: "Coupling should be:", options: ["High", "Low", "Random", "Infinite"], correct: 1 },
                    { q: "Cohesion should be:", options: ["Low", "High", "None", "Random"], correct: 1 },
                    { q: "SOLID relates to:", options: ["OOP design principles", "Networking", "OS memory", "SQL"], correct: 0 },
                    { q: "LSP means:", options: ["Subtypes replace base types", "No inheritance", "No classes", "No methods"], correct: 0 },
                    { q: "OCP means:", options: ["Open for extension, closed for modification", "Always modify", "No extension", "None"], correct: 0 },
                    { q: "SRP means:", options: ["One reason to change", "Many reasons", "No reason", "Random"], correct: 0 },
                    { q: "DIP means:", options: ["Depend on abstractions", "Depend on concretes", "No dependency", "Disk IO"], correct: 0 },
                    { q: "ISP means:", options: ["Small, specific interfaces", "One huge interface", "No interfaces", "Network ISP"], correct: 0 },
                    { q: "Polymorphism is achieved via:", options: ["Overloading/Overriding", "Only variables", "Only loops", "Only arrays"], correct: 0 }
                ]
            }
        }
    }
};

let currentCategory = null;
let currentSubcategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 15;
let isAnswered = false;

const screens = document.querySelectorAll('.screen');
const catContainer = document.getElementById('categories-container');
const subContainer = document.getElementById('subcategories-container');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const timeLeftEl = document.getElementById('time-left');

const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');

function init() {
    renderCategories();
    updateGlobalHighScore();
    setupEventListeners();
    if (localStorage.getItem('quiz-theme') === 'light') {
        document.body.classList.remove('dark-mode');
        document.querySelector('#theme-toggle i').className = 'fas fa-sun';
    }
}

function setupEventListeners() {
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    nextBtn.addEventListener('click', nextQuestion);
}

function showScreen(screenId) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    if (screenId === 'home-screen') {
        currentCategory = null; currentSubcategory = null; stopTimer();
    }
}

function renderCategories() {
    catContainer.innerHTML = '';
    for (const key in questionBank) {
        const cat = questionBank[key];
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<div class="cat-icon"><i class="${cat.icon}"></i></div><h3>${cat.title}</h3><p>${cat.desc}</p>`;
        card.onclick = () => selectCategory(key);
        catContainer.appendChild(card);
    }
}

function selectCategory(catKey) {
    currentCategory = catKey;
    const cat = questionBank[catKey];
    document.getElementById('current-category-name').textContent = cat.title;
    subContainer.innerHTML = '';
    for (const subKey in cat.subcategories) {
        const sub = cat.subcategories[subKey];
        const card = document.createElement('div');
        card.className = 'sub-card';
        card.innerHTML = `<div class="sub-info"><h4>${sub.title}</h4><span>Level: Pro</span></div><div class="sub-btn"><i class="fas fa-play"></i></div>`;
        card.onclick = () => startQuiz(subKey);
        subContainer.appendChild(card);
    }
    showScreen('subcategory-screen');
}

function startQuiz(subKey) {
    currentSubcategory = subKey;
    const subData = questionBank[currentCategory].subcategories[subKey];
    // Randomize 15 from pool
    const pool = [...subData.questions].sort(() => Math.random() - 0.5);
    currentQuestions = pool.slice(0, 15);
    currentQuestionIndex = 0; score = 0;
    document.getElementById('quiz-title-display').textContent = subData.title;
    loadQuestion();
    showScreen('quiz-screen');
}

function loadQuestion() {
    isAnswered = false;
    nextBtn.disabled = true;
    nextBtn.innerHTML = (currentQuestionIndex === currentQuestions.length - 1) ? 'Finish Quiz <i class="fas fa-flag-checkered"></i>' : 'Next Question <i class="fas fa-chevron-right"></i>';
    const qData = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = qData.q;
    document.getElementById('question-counter').textContent = `${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    optionsContainer.innerHTML = '';
    qData.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `<span>${opt}</span><i class="fas fa-circle-notch"></i>`;
        div.onclick = () => handleAnswer(idx, div);
        optionsContainer.appendChild(div);
    });
    startTimer();
}

function handleAnswer(selectedIdx, element) {
    if (isAnswered) return;
    isAnswered = true; stopTimer();
    const correctIdx = currentQuestions[currentQuestionIndex].correct;
    const options = document.querySelectorAll('.option');
    if (selectedIdx === correctIdx) {
        score++; element.classList.add('correct');
        element.querySelector('i').className = 'fas fa-check-circle';
        soundCorrect.play();
    } else {
        element.classList.add('wrong');
        element.querySelector('i').className = 'fas fa-times-circle';
        options[correctIdx].classList.add('correct');
        options[correctIdx].querySelector('i').className = 'fas fa-check-circle';
        soundWrong.play();
    }
    options.forEach(opt => opt.classList.add('disabled'));
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) loadQuestion();
    else showResults();
}

function startTimer() {
    stopTimer(); timeLeft = 15; timeLeftEl.textContent = timeLeft;
    document.getElementById('timer-box').classList.remove('danger');
    timer = setInterval(() => {
        timeLeft--; timeLeftEl.textContent = timeLeft;
        if (timeLeft <= 5) document.getElementById('timer-box').classList.add('danger');
        if (timeLeft === 0) handleTimeout();
    }, 1000);
}

function stopTimer() { if (timer) clearInterval(timer); }

function handleTimeout() {
    isAnswered = true; stopTimer();
    const correctIdx = currentQuestions[currentQuestionIndex].correct;
    const options = document.querySelectorAll('.option');
    options[correctIdx].classList.add('correct');
    options[correctIdx].querySelector('i').className = 'fas fa-check-circle';
    options.forEach(opt => opt.classList.add('disabled'));
    nextBtn.disabled = false; soundWrong.play();
}

function showResults() {
    showScreen('result-screen');
    const total = currentQuestions.length;
    const percent = Math.round((score / total) * 100);
    document.getElementById('res-total').textContent = total;
    document.getElementById('res-correct').textContent = score;
    document.getElementById('res-wrong').textContent = total - score;
    document.getElementById('res-score').textContent = score;
    document.getElementById('res-percentage').textContent = `${percent}%`;
    const circle = document.getElementById('percentage-circle-path');
    circle.style.strokeDasharray = `${percent}, 100`;
    let msg = ""; let icon = "fas fa-check-circle"; let color = "#1b981";
    if (percent >= 80) { msg = "Excellent!"; color = "#10b981"; icon = "fas fa-award"; }
    else if (percent >= 60) { msg = "Good Job!"; color = "#3b82f6"; icon = "fas fa-thumbs-up"; }
    else if (percent >= 40) { msg = "Average"; color = "#fbbf24"; icon = "fas fa-info-circle"; }
    else { msg = "Needs Work"; color = "#ef4444"; icon = "fas fa-frown"; }
    document.getElementById('feedback-text').textContent = msg;
    document.getElementById('feedback-icon').className = icon;
    document.getElementById('feedback-icon').style.color = color;
    circle.style.stroke = color;
    const highKey = `highscore_${currentCategory}_${currentSubcategory}`;
    const prevHigh = localStorage.getItem(highKey) || 0;
    if (score > prevHigh) localStorage.setItem(highKey, score);
    updateGlobalHighScore();
}

function restartQuiz() { startQuiz(currentSubcategory); }

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('quiz-theme', isDark ? 'dark' : 'light');
    document.querySelector('#theme-toggle i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
}

function updateGlobalHighScore() {
    let totalMax = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('highscore_')) totalMax += parseInt(localStorage.getItem(key));
    }
    document.getElementById('global-high-score').textContent = totalMax;
}

window.onload = init;
