ezmake
======

Ezmake Do-it-yourself web app
Owner: vinay.kawade@gmail.com

## Coding Conventions:
### Namespace

All code should be scoped with namespace "'''EgnyteDrive'''"

### Class

Example:
```

namespace EgnyteDrive 
{

class SqlStatements {
  public:
    static const char* DB_INIT;
    static const char* BEGIN_TRANSACTION;
    static const char* BEGIN_IMMEDIATE;
    
    int getLastInsertedRowId() const;
  private:
    int mLastRowId;
};

}

```

* All class names must be in UpperCamelCase. Ex: SqlConstants

* All class members variables must be 'm' follwed by <UpperCamelCase-Variablename>. Ex "mThreadId"

* All class member function names must be lowerCamelCase. Ex: getThreadId()

* All static class members must be ALL_CAPS with underscore as separator. Ex: BEGIN_TRANSACTION

* Use 'const' where ever possible to enforce constness. (this is difficult to do later)

* No tabs to be used. Always use spaces. Set you editor accordingly to convert all tabs to spaces.

* K&R kind of block statements.
Ex:

```
int Database::backup(const std::string &srcFilename, const std::string &desFilename) {
    return -1;
}
```

* All if/else/while statements must have curly braces.

```
if (srcFilename == desFilename) {
    return true;
}
```

== Templates ==

* Declaration on new line.

```
namespace EgnyteDrive 
{

template <class T>
class EgBlockingQueue {
  public:
    EgBlockingQueue(size_t size = 32);
    ~EgBlockingQueue();
};

}

```

### Function

* All function name must be lowerCamelCase

```
std::string joinStrings(const std::string& str1, const std::string& str2) {
    return str1 + str2;
}
```



